import http.server, socketserver, os
PORT = 8080
os.chdir(os.path.dirname(os.path.abspath(__file__)))
Handler = http.server.SimpleHTTPRequestHandler
with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Serving Movie Vault website at http://localhost:{PORT}")
    httpd.serve_forever()
