import React, { Component } from 'react';
import {connect} from "react-redux";

class WeatherList extends Component {

	renderWeather(cityData) {

		const name = cityData.city.name;
		const temperature = cityData.list[0].main.temp;
		const pressure = cityData.list[0].main.pressure;
		const humidity = cityData.list[0].main.humidity;

		return(
			<tr key={name}>
				<td>{name}</td>
				<td>{temperature}</td>
				<td>{pressure}</td>
				<td>{humidity}</td>
			</tr>
		);

	}

	render() {
		return(
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature</th>
						<th>Pressure</th>
						<th>Humidity</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		);
	}
}

function mapStateToProps({weather}) {
	return {weather};
}

export default connect(mapStateToProps)(WeatherList);