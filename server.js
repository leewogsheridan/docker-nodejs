const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>My Express App</title>

            <style>
                * {
                    box-sizing: border-box;
                    margin: 0;
                    padding: 0;
                }

                body {
                    font-family: Arial, sans-serif;
                    background: linear-gradient(135deg, #1e1e2f, #302b63);
                    color: white;
                    min-height: 100vh;
                    display: flex;
                    flex-direction: column;
                }

                header {
                    padding: 20px 40px;
                    background: rgba(0, 0, 0, 0.25);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                header h2 {
                    color: #61dafb;
                }

                nav a {
                    color: white;
                    text-decoration: none;
                    margin-left: 20px;
                    transition: 0.3s;
                }

                nav a:hover {
                    color: #61dafb;
                }

                main {
                    flex: 1;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 40px;
                }

                .container {
                    max-width: 800px;
                    width: 100%;
                    text-align: center;
                }

                .hero {
                    background: rgba(255, 255, 255, 0.08);
                    padding: 50px;
                    border-radius: 20px;
                    backdrop-filter: blur(10px);
                    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
                }

                .hero h1 {
                    font-size: 3rem;
                    margin-bottom: 15px;
                }

                .hero h1 span {
                    color: #61dafb;
                }

                .hero p {
                    font-size: 1.1rem;
                    color: #cccccc;
                    margin-bottom: 30px;
                }

                .button {
                    display: inline-block;
                    padding: 12px 25px;
                    background: #61dafb;
                    color: #111;
                    border-radius: 8px;
                    text-decoration: none;
                    font-weight: bold;
                    transition: 0.3s;
                }

                .button:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 8px 20px rgba(97, 218, 251, 0.4);
                }

                .cards {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 20px;
                    margin-top: 25px;
                }

                .card {
                    background: rgba(255, 255, 255, 0.08);
                    padding: 25px;
                    border-radius: 15px;
                    transition: 0.3s;
                }

                .card:hover {
                    transform: translateY(-5px);
                    background: rgba(255, 255, 255, 0.13);
                }

                .card h3 {
                    margin-bottom: 10px;
                    color: #61dafb;
                }

                .card p {
                    color: #ccc;
                }

                footer {
                    text-align: center;
                    padding: 20px;
                    color: #aaa;
                    font-size: 0.9rem;
                }

                @media (max-width: 700px) {
                    .cards {
                        grid-template-columns: 1fr;
                    }

                    .hero h1 {
                        font-size: 2rem;
                    }

                    header {
                        padding: 20px;
                    }

                    nav {
                        display: none;
                    }
                }
            </style>
        </head>

        <body>

            <header>
                <h2>My Express App</h2>

                <nav>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/api">API</a>
                </nav>
            </header>

            <main>
                <div class="container">

                    <section class="hero">
                        <h1>Hello from <span>Express!</span></h1>

                        <p>
                            i dont know what is going on
                            <br>
                            but at least the server is running.
                        </p>

                        <a href="/api" class="button">
                            Check the API
                        </a>
                    </section>

                    <section class="cards">

                        <div class="card">
                            <h3>🚀 Server</h3>
                            <p>Express is running successfully.</p>
                        </div>

                        <div class="card">
                            <h3>⚡ Port</h3>
                            <p>Running on port ${PORT}.</p>
                        </div>

                        <div class="card">
                            <h3>🟢 Status</h3>
                            <p>Everything appears to be working.</p>
                        </div>

                    </section>

                </div>
            </main>

            <footer>
                Express.js • Made with questionable amounts of confidence
            </footer>

        </body>
        </html>
    `);
});

app.get('/about', (req, res) => {
    res.send(`
        <h1>About</h1>
        <p>This is a small Express.js application.</p>
        <a href="/">Go Home</a>
    `);
});

app.get('/api', (req, res) => {
    res.json({
        status: 'success',
        message: 'i dont know what is going on',
        server: 'Express',
        port: PORT,
        timestamp: new Date().toISOString()
    });
});

app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`);
});
