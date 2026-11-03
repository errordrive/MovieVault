package com.reelvault.app;

import android.content.Intent;
import android.content.pm.PackageInfo;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.view.View;
import android.webkit.JavascriptInterface;
import android.webkit.WebView;
import androidx.core.app.NotificationCompat;
import androidx.core.content.FileProvider;
import androidx.core.graphics.Insets;
import androidx.core.view.OnApplyWindowInsetsListener;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowCompat;
import androidx.core.view.WindowInsetsCompat;
import androidx.core.view.WindowInsetsControllerCompat;
import androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
import com.getcapacitor.BridgeActivity;
import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;

/* JADX INFO: loaded from: classes.dex */
public class MainActivity extends BridgeActivity {
    private volatile int insTop = 0;
    private volatile int insBottom = 0;
    private volatile boolean updCancel = false;
    private volatile boolean updBusy = false;

    private void rvJs(final String str) {
        runOnUiThread(new Runnable() { // from class: com.reelvault.app.MainActivity.1
            @Override // java.lang.Runnable
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

    /* JADX INFO: Access modifiers changed from: private */
    /* JADX WARN: Code duplicated, block: B:108:0x016a A[EXC_TOP_SPLITTER, SYNTHETIC] */
    /* JADX WARN: Code duplicated, block: B:112:0x0152 A[EXC_TOP_SPLITTER, SYNTHETIC] */
    /* JADX WARN: Code duplicated, block: B:114:0x0171 A[EXC_TOP_SPLITTER, SYNTHETIC] */
    /* JADX WARN: Code duplicated, block: B:116:0x0159 A[EXC_TOP_SPLITTER, SYNTHETIC] */
    /* JADX WARN: Code duplicated, block: B:118:0x0178 A[EXC_TOP_SPLITTER, SYNTHETIC] */
    /* JADX WARN: Code duplicated, block: B:78:0x0143  */
    /* JADX WARN: Code duplicated, block: B:79:0x0146  */
    /* JADX WARN: Code duplicated, block: B:90:0x0160 A[Catch: Exception -> 0x0163, TRY_ENTER, TRY_LEAVE, TryCatch #14 {Exception -> 0x0163, blocks: (B:50:0x00eb, B:90:0x0160), top: B:123:0x0007 }] */
    public void rvDownload(String str, long j) throws Throwable {
        FileOutputStream fileOutputStream;
        HttpURLConnection httpURLConnection;
        InputStream inputStream;
        String str2;
        int i;
        int i2 = 0;
        try {
            try {
                if (!str.startsWith("https://")) {
                    throw new Exception("Bad download link");
                }
                File file = new File(getCacheDir(), "upd");
                file.mkdirs();
                File file2 = new File(file, "MovieVault.part");
                File file3 = new File(file, "MovieVault.apk");
                if (file3.exists()) {
                    file3.delete();
                }
                httpURLConnection = (HttpURLConnection) new URL(str).openConnection();
                try {
                    httpURLConnection.setConnectTimeout(AccessibilityNodeInfoCompat.EXTRA_DATA_TEXT_CHARACTER_LOCATION_ARG_MAX_LENGTH);
                    httpURLConnection.setReadTimeout(30000);
                    httpURLConnection.setInstanceFollowRedirects(true);
                    httpURLConnection.connect();
                    if (httpURLConnection.getResponseCode() != 200) {
                        throw new Exception("Server error " + httpURLConnection.getResponseCode());
                    }
                    long contentLength = httpURLConnection.getContentLength();
                    if (contentLength <= 0) {
                        contentLength = j;
                    }
                    InputStream inputStream2 = httpURLConnection.getInputStream();
                    try {
                        FileOutputStream fileOutputStream2 = new FileOutputStream(file2);
                        try {
                            byte[] bArr = new byte[32768];
                            int i3 = -1;
                            long j2 = 0;
                            while (true) {
                                int i4 = inputStream2.read(bArr);
                                if (i4 <= 0) {
                                    fileOutputStream2.close();
                                    if (contentLength > 0 && j2 != contentLength) {
                                        throw new Exception("Download incomplete");
                                    }
                                    PackageInfo packageArchiveInfo = getPackageManager().getPackageArchiveInfo(file2.getAbsolutePath(), 0);
                                    if (packageArchiveInfo == null || !getPackageName().equals(packageArchiveInfo.packageName)) {
                                        file2.delete();
                                        throw new Exception("This file is not a Movie Vault update");
                                    }
                                    file2.renameTo(file3);
                                    rvUpd("done", 100, "");
                                    if (inputStream2 != null) {
                                        try {
                                            inputStream2.close();
                                        } catch (Exception unused) {
                                        }
                                    }
                                    if (httpURLConnection != null) {
                                        httpURLConnection.disconnect();
                                        break;
                                    }
                                    this.updBusy = false;
                                }
                                if (this.updCancel) {
                                    throw new Exception("Cancelled");
                                }
                                fileOutputStream2.write(bArr, i2, i4);
                                j2 += (long) i4;
                                if (contentLength > 0 && (i = (int) ((100 * j2) / contentLength)) != i3) {
                                    rvUpd(NotificationCompat.CATEGORY_PROGRESS, i, "");
                                    i3 = i;
                                }
                                i2 = 0;
                            }
                        } catch (Exception e) {
                            e = e;
                            inputStream = inputStream2;
                            fileOutputStream = fileOutputStream2;
                            try {
                                if (this.updCancel) {
                                    str2 = "cancel";
                                } else {
                                    str2 = "error";
                                }
                                rvUpd(str2, 0, e.getMessage());
                                if (fileOutputStream != null) {
                                    try {
                                        fileOutputStream.close();
                                    } catch (Exception unused2) {
                                    }
                                }
                                if (inputStream != null) {
                                    try {
                                        inputStream.close();
                                    } catch (Exception unused3) {
                                    }
                                }
                                if (httpURLConnection != null) {
                                    httpURLConnection.disconnect();
                                }
                                this.updBusy = false;
                            } catch (Throwable th) {
                                th = th;
                                if (fileOutputStream != null) {
                                    try {
                                        fileOutputStream.close();
                                    } catch (Exception unused4) {
                                    }
                                }
                                if (inputStream != null) {
                                    try {
                                        inputStream.close();
                                    } catch (Exception unused5) {
                                    }
                                }
                                if (httpURLConnection != null) {
                                    try {
                                        httpURLConnection.disconnect();
                                    } catch (Exception unused6) {
                                    }
                                }
                                this.updBusy = false;
                                throw th;
                            }
                        } catch (Throwable th2) {
                            th = th2;
                            inputStream = inputStream2;
                            fileOutputStream = fileOutputStream2;
                            if (fileOutputStream != null) {
                                fileOutputStream.close();
                            }
                            if (inputStream != null) {
                                inputStream.close();
                            }
                            if (httpURLConnection != null) {
                                httpURLConnection.disconnect();
                            }
                            this.updBusy = false;
                            throw th;
                        }
                    } catch (Exception e2) {
                        e = e2;
                        inputStream = inputStream2;
                        fileOutputStream = null;
                    } catch (Throwable th3) {
                        th = th3;
                        inputStream = inputStream2;
                        fileOutputStream = null;
                    }
                    this.updBusy = false;
                } catch (Exception e3) {
                    e = e3;
                    fileOutputStream = null;
                    inputStream = null;
                    if (this.updCancel) {
                        str2 = "cancel";
                    } else {
                        str2 = "error";
                    }
                    rvUpd(str2, 0, e.getMessage());
                    if (fileOutputStream != null) {
                        fileOutputStream.close();
                    }
                    if (inputStream != null) {
                        inputStream.close();
                    }
                    if (httpURLConnection != null) {
                        httpURLConnection.disconnect();
                    }
                    this.updBusy = false;
                } catch (Throwable th4) {
                    th = th4;
                    fileOutputStream = null;
                    inputStream = null;
                    if (fileOutputStream != null) {
                        fileOutputStream.close();
                    }
                    if (inputStream != null) {
                        inputStream.close();
                    }
                    if (httpURLConnection != null) {
                        httpURLConnection.disconnect();
                    }
                    this.updBusy = false;
                    throw th;
                }
            } catch (Exception unused7) {
            }
        } catch (Exception e4) {
            e = e4;
            fileOutputStream = null;
            httpURLConnection = null;
        } catch (Throwable th5) {
            th = th5;
            fileOutputStream = null;
            httpURLConnection = null;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
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
            intent.addFlags(268435457);
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
            new Thread(new Runnable() { // from class: com.reelvault.app.MainActivity.RV.1
                @Override // java.lang.Runnable
                public void run() throws Throwable {
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
            MainActivity.this.runOnUiThread(new Runnable() { // from class: com.reelvault.app.MainActivity.RV.2
                @Override // java.lang.Runnable
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
            MainActivity.this.runOnUiThread(new Runnable() { // from class: com.reelvault.app.MainActivity.RV.3
                @Override // java.lang.Runnable
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

    @Override // com.getcapacitor.BridgeActivity, androidx.fragment.app.FragmentActivity, androidx.activity.ComponentActivity, androidx.core.app.ComponentActivity, android.app.Activity
    public void onCreate(Bundle bundle) {
        super.onCreate(bundle);
        WindowCompat.setDecorFitsSystemWindows(getWindow(), false);
        getWindow().setStatusBarColor(0);
        getWindow().setNavigationBarColor(0);
        final WebView webView = getBridge().getWebView();
        webView.addJavascriptInterface(new RV(), "RVNative");
        ViewCompat.setOnApplyWindowInsetsListener(getWindow().getDecorView(), new OnApplyWindowInsetsListener() { // from class: com.reelvault.app.MainActivity.2
            @Override // androidx.core.view.OnApplyWindowInsetsListener
            public WindowInsetsCompat onApplyWindowInsets(View view, WindowInsetsCompat windowInsetsCompat) {
                Insets insets = windowInsetsCompat.getInsets(WindowInsetsCompat.Type.systemBars() | WindowInsetsCompat.Type.displayCutout() | WindowInsetsCompat.Type.ime());
                float f = MainActivity.this.getResources().getDisplayMetrics().density;
                MainActivity.this.insTop = Math.round(insets.top / f);
                MainActivity.this.insBottom = Math.round(insets.bottom / f);
                final String str = "window.rvInsets&&window.rvInsets(" + MainActivity.this.insTop + "," + MainActivity.this.insBottom + ")";
                webView.post(new Runnable() { // from class: com.reelvault.app.MainActivity.2.1
                    @Override // java.lang.Runnable
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
