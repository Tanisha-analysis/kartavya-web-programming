from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from pathlib import Path
import mimetypes

BASE_DIR = Path(__file__).resolve().parent
TEMPLATES_DIR = BASE_DIR / "templates"
STATIC_DIR = BASE_DIR / "static"

HOST = "127.0.0.1"
PORT = 8000

# Page address in the browser -> HTML file inside the templates folder
PAGES = {
    "/": "index.html",
    "/index.html": "index.html",
    "/register": "register.html",
    "/login": "login.html",
    "/dashboard": "dashboard.html",
    "/help_connect": "help_connect.html",
    "/share_reuse": "share_reuse.html",
    "/civic_voice": "civic_voice.html",
}


class KartavyaHandler(SimpleHTTPRequestHandler):

    def serve_file(self, file_path):
        file_path = file_path.resolve()

        # Safety: only serve files from inside the project folder
        if not file_path.is_relative_to(BASE_DIR):
            return self.send_error(403, "Forbidden")

        if not file_path.is_file():
            return self.send_error(404, "File not found")

        content = file_path.read_bytes()
        content_type = mimetypes.guess_type(str(file_path))[0] or "application/octet-stream"

        if content_type.startswith("text/") or content_type in (
            "application/javascript", "application/json"
        ):
            content_type += "; charset=utf-8"

        self.send_response(200)
        self.send_header("Content-Type", content_type)
        self.send_header("Content-Length", str(len(content)))
        self.end_headers()
        self.wfile.write(content)

    def do_GET(self):
        path = self.path.split("?")[0]

        if path in PAGES:
            return self.serve_file(TEMPLATES_DIR / PAGES[path])

        if path.startswith("/templates/"):
            return self.serve_file(TEMPLATES_DIR / path.removeprefix("/templates/"))

        if path.startswith("/static/"):
            return self.serve_file(STATIC_DIR / path.removeprefix("/static/"))

        return self.send_error(404, "Page not found")

    def do_POST(self):
        # No backend: a submitted form just shows a demo message (nothing is saved).
        body = (
            "<!DOCTYPE html><html><head><meta charset='UTF-8'>"
            "<title>KARTAVYA</title></head>"
            "<body style='font-family:Arial;max-width:600px;margin:60px auto;'>"
            "<h1>KARTAVYA</h1>"
            "<p>Form submitted. (Demo only: no data is saved.)</p>"
            "<a href='/'>Return to Home</a></body></html>"
        ).encode("utf-8")

        self.send_response(200)
        self.send_header("Content-Type", "text/html; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)


def main():
    if not (TEMPLATES_DIR / "index.html").is_file():
        raise FileNotFoundError(f"Homepage not found: {TEMPLATES_DIR / 'index.html'}")

    server = ThreadingHTTPServer((HOST, PORT), KartavyaHandler)
    print(f"KARTAVYA server running at http://localhost:{PORT}/")
    print("Keep this terminal open. Press Ctrl+C to stop.")

    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nKARTAVYA server stopped.")
    finally:
        server.server_close()


if __name__ == "__main__":
    main()