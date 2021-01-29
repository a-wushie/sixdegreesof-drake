import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    {/* <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Six Degrees of Drake</title>
     <link rel="stylesheet" href="css/style.css">
    </head> */}
    {/* <body> */}
        <div class="container">
            <header>
                <section>
                        <h1>Six Degrees</h1> 
                            <h1>of</h1>
                            <h1>Drake</h1>
                </section>
            </header>
            <section id="main">
                <h2>How close is your favourite artist to Drizzy?</h2>
            </section>
            <section id="search">
                <form action="">
                    <input />
                    <input type="button" value="search"/>
                    <a class="button" href="/random"></a>
                </form>
            </section>
            <section>
                <button>
                    <h2>RANDOM</h2>
                </button>
                Random button placeholder
            </section>
            <section>
                Socials Placeholder
            </section>
            <footer>
                &copy; Awushie Fayose LLC
            </footer>
        </div>
    {/* </body> */}
    </>
  );
}

export default App;
