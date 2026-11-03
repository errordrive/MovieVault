package com.reelvault.app;

import android.content.Intent;
import android.content.pm.PackageInfo;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.view.View;
import android.webkit.JavascriptInterface;
import android.webkit.WebView;
import androidx.core.content.FileProvider;
import androidx.core.graphics.Insets;
import androidx.core.view.OnApplyWindowInsetsListener;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowCompat;
import androidx.core.view.WindowInsetsCompat;
import androidx.core.view.WindowInsetsControllerCompat;
import com.getcapacitor.BridgeActivity;
import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;

public class MainActivity extends BridgeActivity {
    private volatile int insTop = 0;
    private volatile int insBottom = 0;
    private volatile boolean updCancel = false;
    private volatile boolean updBusy = false;

    private void rvJs(final String str) {
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                try {
                    MainActivity.this.getBridge().getWebView().evaluateJavascript(str, null);
                } catch (Exception unused) {
                }
            }
        });
    }

    private void rvUpd(String str, int i, String str2) {
        rvJs("window.rvUpd&&window.rvUpd('" + str + "'," + i + ",'" + (str2 == null ? "" : str2.replaceAll("[^A-Za-z0-9 .,:/-]", " ")) + "')");
    }

    public void rvDownload(String str, long j) {
        HttpURLConnection conn = null;
        InputStream in = null;
        FileOutputStream out = null;
        try {
            if (!str.startsWith("https://")) {
                throw new Exception("Bad download link");
            }
            File dir = new File(getCacheDir(), "upd");
            dir.mkdirs();
            File partFile = new File(dir, "MovieVault.part");
            File apkFile = new File(dir, "MovieVault.apk");
            if (apkFile.exists()) {
                apkFile.delete();
            }

            conn = (HttpURLConnection) new URL(str).openConnection();
            conn.setConnectTimeout(10000);
            conn.setReadTimeout(30000);
            conn.setInstanceFollowRedirects(true);
            conn.connect();

            if (conn.getResponseCode() != 200) {
                throw new Exception("Server error " + conn.getResponseCode());
            }

            long contentLength = conn.getContentLength();
            if (contentLength <= 0) {
                contentLength = j;
            }

            in = conn.getInputStream();
            out = new FileOutputStream(partFile);

            byte[] buffer = new byte[32768];
            int lastProgress = -1;
            long totalBytes = 0;
            int bytesRead;

            while ((bytesRead = in.read(buffer)) > 0) {
                if (this.updCancel) {
                    throw new Exception("Cancelled");
                }
                out.write(buffer, 0, bytesRead);
                totalBytes += bytesRead;

                if (contentLength > 0) {
                    int progress = (int) ((100 * totalBytes) / contentLength);
                    if (progress != lastProgress) {
                        rvUpd("progress", progress, "");
                        lastProgress = progress;
                    }
                }
            }

            out.close();
            out = null;

            if (contentLength > 0 && totalBytes != contentLength) {
                throw new Exception("Download incomplete");
            }

            PackageInfo packageArchiveInfo = getPackageManager().getPackageArchiveInfo(partFile.getAbsolutePath(), 0);
            if (packageArchiveInfo == null || !getPackageName().equals(packageArchiveInfo.packageName)) {
                partFile.delete();
                throw new Exception("This file is not a Movie Vault update");
            }

            partFile.renameTo(apkFile);
            rvUpd("done", 100, "");

        } catch (Exception e) {
            String status = this.updCancel ? "cancel" : "error";
            rvUpd(status, 0, e.getMessage());
        } finally {
            if (out != null) {
                try {
                    out.close();
                } catch (Exception unused) {
                }
            }
            if (in != null) {
                try {
                    in.close();
                } catch (Exception unused) {
                }
            }
            if (conn != null) {
                try {
                    conn.disconnect();
                } catch (Exception unused) {
                }
            }
            this.updBusy = false;
        }
    }

    public void rvInstall() {
        try {
            File file = new File(getCacheDir(), "upd/MovieVault.apk");
            if (!file.exists()) {
                rvUpd("error", 0, "Update file not found. Please download again");
                return;
            }
            if (Build.VERSION.SDK_INT >= 26 && !getPackageManager().canRequestPackageInstalls()) {
                startActivity(new Intent("android.settings.MANAGE_UNKNOWN_APP_SOURCES", Uri.parse("package:" + getPackageName())));
                rvUpd("perm", 0, "");
                return;
            }
            Uri uriForFile = FileProvider.getUriForFile(this, getPackageName() + ".rvfiles", file);
            Intent intent = new Intent("android.intent.action.VIEW");
            intent.setDataAndType(uriForFile, "application/vnd.android.package-archive");
            intent.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION | Intent.FLAG_ACTIVITY_NEW_TASK);
            startActivity(intent);
            rvUpd("installing", 0, "");
        } catch (Exception unused) {
            rvUpd("error", 0, "Could not open the installer");
        }
    }

    public class RV {
        public RV() {
        }

        @JavascriptInterface
        public void download(final String str, final long j) {
            if (MainActivity.this.updBusy) {
                return;
            }
            MainActivity.this.updBusy = true;
            MainActivity.this.updCancel = false;
            new Thread(new Runnable() {
                @Override
                public void run() {
                    MainActivity.this.rvDownload(str, j);
                }
            }).start();
        }

        @JavascriptInterface
        public void cancel() {
            MainActivity.this.updCancel = true;
        }

        @JavascriptInterface
        public void install() {
            MainActivity.this.runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    MainActivity.this.rvInstall();
                }
            });
        }

        @JavascriptInterface
        public String insets() {
            return MainActivity.this.insTop + "," + MainActivity.this.insBottom;
        }

        @JavascriptInterface
        public void setBars(final boolean z) {
            MainActivity.this.runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    try {
                        WindowInsetsControllerCompat insetsController = WindowCompat.getInsetsController(MainActivity.this.getWindow(), MainActivity.this.getWindow().getDecorView());
                        insetsController.setAppearanceLightStatusBars(!z);
                        insetsController.setAppearanceLightNavigationBars(!z);
                    } catch (Exception unused) {
                    }
                }
            });
        }
    }

    @Override
    public void onCreate(Bundle bundle) {
        super.onCreate(bundle);
        WindowCompat.setDecorFitsSystemWindows(getWindow(), false);
        getWindow().setStatusBarColor(0);
        getWindow().setNavigationBarColor(0);
        final WebView webView = getBridge().getWebView();
        webView.addJavascriptInterface(new RV(), "RVNative");
        ViewCompat.setOnApplyWindowInsetsListener(getWindow().getDecorView(), new OnApplyWindowInsetsListener() {
            @Override
            public WindowInsetsCompat onApplyWindowInsets(View view, WindowInsetsCompat windowInsetsCompat) {
                Insets insets = windowInsetsCompat.getInsets(WindowInsetsCompat.Type.systemBars() | WindowInsetsCompat.Type.displayCutout() | WindowInsetsCompat.Type.ime());
                float f = MainActivity.this.getResources().getDisplayMetrics().density;
                MainActivity.this.insTop = Math.round(insets.top / f);
                MainActivity.this.insBottom = Math.round(insets.bottom / f);
                final String str = "window.rvInsets&&window.rvInsets(" + MainActivity.this.insTop + "," + MainActivity.this.insBottom + ")";
                webView.post(new Runnable() {
                    @Override
                    public void run() {
                        webView.evaluateJavascript(str, null);
                    }
                });
                return windowInsetsCompat;
            }
        });
        ViewCompat.requestApplyInsets(getWindow().getDecorView());
    }
}
