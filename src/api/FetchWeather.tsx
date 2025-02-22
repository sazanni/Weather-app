export default class Weather {
    static async getWeatherInfo(inputValue: string): Promise<any> {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=5b7055ed99a0402eb9b150745251202&q=${inputValue}&aqi=no&lang=ru`);
        const json = await response.json();
        return json;
    }

    static async getAutoFill(inputValue: string): Promise<any> {
        const response = await fetch(`http://api.weatherapi.com/v1/search.json?key=5b7055ed99a0402eb9b150745251202&q=${inputValue}`);
        const json = await response.json();
        return json;
    }

    static async getWeatherWeekPredict(currentCity: string): Promise<any> {
        const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=5b7055ed99a0402eb9b150745251202&q=${currentCity}&days=7&aqi=no&alerts=no&lang=ru`);
        const json = await response.json();
        return json; 
    }
}