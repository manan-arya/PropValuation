//import { useEffect, useState } from 'react';
import './App.css';
import AppNavbar from './NavBar';
import Cards from './Cards';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserForm from './UserForm';

/*interface Forecast {
    date: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}*/

function App() {
/*    const [forecasts, setForecasts] = useState<Forecast[]>();*/

/*    useEffect(() => {
        populateWeatherData();
    }, []);
*/
/*    const contents = forecasts === undefined
        ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
        : <table className="table table-striped" aria-labelledby="tableLabel">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Temp. (C)</th>
                    <th>Temp. (F)</th>
                    <th>Summary</th>
                </tr>
            </thead>
            <tbody>
                {forecasts.map(forecast =>
                    <tr key={forecast.date}>
                        <td>{forecast.date}</td>
                        <td>{forecast.temperatureC}</td>
                        <td>{forecast.temperatureF}</td>
                        <td>{forecast.summary}</td>
                    </tr>
                )}
            </tbody>
        </table>;*/

    return (
        <div>
            <AppNavbar />
            <div className="banner" style={{ position: 'relative', textAlign: 'center', color: 'white' }}>
                <img src="/Banner.webp" alt="Banner" style={{ width: '100%', maxHeight: '100rem' }} />
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <h1>Welcome to Our Application</h1>
                    <p>Your success is our priority</p>
                </div>
            </div>
            <Cards />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ marginBottom: '1px solid #ccc' }}>
                    <div style={{ height: '400px', border: '1px solid #ccc' }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2249.9999999999995!2d77.151811!3d28.714458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDI1JzEwLjAiTiAwwrAyMycxMC4wIlc!5e0!3m2!1sen!2sus!4v1678974342011!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
                <div style={{ marginBottom: '1px solid #ccc' }}>
                    <h2>Submit Your Details</h2>
                    <UserForm />
                </div>
            </div>
        </div>
    );

/*    async function populateWeatherData() {
*//*        const response = await fetch('weatherforecast');
        const data = await response.json();
        setForecasts(data);*//*
    }*/
}

export default App;