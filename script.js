// const sampleData = {
//   timelines: {
//     daily: [
//       {
//         time: "2024-04-21T10:00:00Z",
//         values: {
//           cloudBaseAvg: 0.63,
//           cloudBaseMax: 3.08,
//           cloudBaseMin: 0,
//           cloudCeilingAvg: 0.23,
//           cloudCeilingMax: 1.37,
//           cloudCeilingMin: 0,
//           cloudCoverAvg: 75.02,
//           cloudCoverMax: 100,
//           cloudCoverMin: 0,
//           dewPointAvg: 48.69,
//           dewPointMax: 55.4,
//           dewPointMin: 40.28,
//           evapotranspirationAvg: 0.002,
//           evapotranspirationMax: 0.012,
//           evapotranspirationMin: 0,
//           evapotranspirationSum: 0.047,
//           freezingRainIntensityAvg: 0,
//           freezingRainIntensityMax: 0,
//           freezingRainIntensityMin: 0,
//           humidityAvg: 82.53,
//           humidityMax: 94,
//           humidityMin: 72.74,
//           iceAccumulationAvg: 0,
//           iceAccumulationLweAvg: 0,
//           iceAccumulationLweMax: 0,
//           iceAccumulationLweMin: 0,
//           iceAccumulationLweSum: 0,
//           iceAccumulationMax: 0,
//           iceAccumulationMin: 0,
//           iceAccumulationSum: 0,
//           moonriseTime: "2024-04-21T22:13:45Z",
//           moonsetTime: "2024-04-21T09:47:47Z",
//           precipitationProbabilityAvg: 32.4,
//           precipitationProbabilityMax: 99,
//           precipitationProbabilityMin: 0,
//           pressureSurfaceLevelAvg: 29.21,
//           pressureSurfaceLevelMax: 29.27,
//           pressureSurfaceLevelMin: 29.16,
//           rainAccumulationAvg: 0.04,
//           rainAccumulationLweAvg: 0.03,
//           rainAccumulationLweMax: 0.22,
//           rainAccumulationLweMin: 0,
//           rainAccumulationMax: 0.21,
//           rainAccumulationMin: 0,
//           rainAccumulationSum: 0.84,
//           rainIntensityAvg: 0.04,
//           rainIntensityMax: 0.34,
//           rainIntensityMin: 0,
//           sleetAccumulationAvg: 0,
//           sleetAccumulationLweAvg: 0,
//           sleetAccumulationLweMax: 0,
//           sleetAccumulationLweMin: 0,
//           sleetAccumulationLweSum: 0,
//           sleetAccumulationMax: 0,
//           sleetAccumulationMin: 0,
//           sleetIntensityAvg: 0,
//           sleetIntensityMax: 0,
//           sleetIntensityMin: 0,
//           snowAccumulationAvg: 0,
//           snowAccumulationLweAvg: 0,
//           snowAccumulationLweMax: 0,
//           snowAccumulationLweMin: 0,
//           snowAccumulationLweSum: 0,
//           snowAccumulationMax: 0,
//           snowAccumulationMin: 0,
//           snowAccumulationSum: 0,
//           snowDepthAvg: 0,
//           snowDepthMax: 0,
//           snowDepthMin: 0,
//           snowDepthSum: 0,
//           snowIntensityAvg: 0,
//           snowIntensityMax: 0,
//           snowIntensityMin: 0,
//           sunriseTime: "2024-04-21T10:56:00Z",
//           sunsetTime: "2024-04-22T00:07:00Z",
//           temperatureApparentAvg: 53.95,
//           temperatureApparentMax: 57.51,
//           temperatureApparentMin: 47.38,
//           temperatureAvg: 53.95,
//           temperatureMax: 57.51,
//           temperatureMin: 47.38,
//           uvHealthConcernAvg: 0,
//           uvHealthConcernMax: 1,
//           uvHealthConcernMin: 0,
//           uvIndexAvg: 0,
//           uvIndexMax: 3,
//           uvIndexMin: 0,
//           visibilityAvg: 8.56,
//           visibilityMax: 9.94,
//           visibilityMin: 4.58,
//           weatherCodeMax: 4200,
//           weatherCodeMin: 4200,
//           windDirectionAvg: 221.66,
//           windGustAvg: 10.41,
//           windGustMax: 16.18,
//           windGustMin: 3.36,
//           windSpeedAvg: 6.27,
//           windSpeedMax: 8.75,
//           windSpeedMin: 3.08,
//         },
//       },
//       {
//         time: "2024-04-22T10:00:00Z",
//         values: {
//           cloudBaseAvg: 0,
//           cloudBaseMax: 0,
//           cloudBaseMin: 0,
//           cloudCeilingAvg: 0,
//           cloudCeilingMax: 0,
//           cloudCeilingMin: 0,
//           cloudCoverAvg: 4.05,
//           cloudCoverMax: 20.02,
//           cloudCoverMin: 0,
//           dewPointAvg: 41.59,
//           dewPointMax: 45.6,
//           dewPointMin: 38.68,
//           evapotranspirationAvg: 0.007,
//           evapotranspirationMax: 0.02,
//           evapotranspirationMin: 0.001,
//           evapotranspirationSum: 0.155,
//           freezingRainIntensityAvg: 0,
//           freezingRainIntensityMax: 0,
//           freezingRainIntensityMin: 0,
//           humidityAvg: 65.72,
//           humidityMax: 88.42,
//           humidityMin: 46.08,
//           iceAccumulationAvg: 0,
//           iceAccumulationLweAvg: 0,
//           iceAccumulationLweMax: 0,
//           iceAccumulationLweMin: 0,
//           iceAccumulationLweSum: 0,
//           iceAccumulationMax: 0,
//           iceAccumulationMin: 0,
//           iceAccumulationSum: 0,
//           moonriseTime: "2024-04-22T23:09:21Z",
//           moonsetTime: "2024-04-22T10:10:06Z",
//           precipitationProbabilityAvg: 0,
//           precipitationProbabilityMax: 0,
//           precipitationProbabilityMin: 0,
//           pressureSurfaceLevelAvg: 29.35,
//           pressureSurfaceLevelMax: 29.42,
//           pressureSurfaceLevelMin: 29.29,
//           rainAccumulationAvg: 0,
//           rainAccumulationLweAvg: 0,
//           rainAccumulationLweMax: 0,
//           rainAccumulationLweMin: 0,
//           rainAccumulationMax: 0,
//           rainAccumulationMin: 0,
//           rainAccumulationSum: 0,
//           rainIntensityAvg: 0,
//           rainIntensityMax: 0,
//           rainIntensityMin: 0,
//           sleetAccumulationAvg: 0,
//           sleetAccumulationLweAvg: 0,
//           sleetAccumulationLweMax: 0,
//           sleetAccumulationLweMin: 0,
//           sleetAccumulationLweSum: 0,
//           sleetAccumulationMax: 0,
//           sleetAccumulationMin: 0,
//           sleetIntensityAvg: 0,
//           sleetIntensityMax: 0,
//           sleetIntensityMin: 0,
//           snowAccumulationAvg: 0,
//           snowAccumulationLweAvg: 0,
//           snowAccumulationLweMax: 0,
//           snowAccumulationLweMin: 0,
//           snowAccumulationLweSum: 0,
//           snowAccumulationMax: 0,
//           snowAccumulationMin: 0,
//           snowAccumulationSum: 0,
//           snowDepthAvg: 0,
//           snowDepthMax: 0,
//           snowDepthMin: 0,
//           snowDepthSum: 0,
//           snowIntensityAvg: 0,
//           snowIntensityMax: 0,
//           snowIntensityMin: 0,
//           sunriseTime: "2024-04-22T10:55:00Z",
//           sunsetTime: "2024-04-23T00:08:00Z",
//           temperatureApparentAvg: 53.77,
//           temperatureApparentMax: 62.04,
//           temperatureApparentMin: 44.55,
//           temperatureAvg: 53.77,
//           temperatureMax: 62.04,
//           temperatureMin: 44.55,
//           uvHealthConcernAvg: 0,
//           uvHealthConcernMax: 2,
//           uvHealthConcernMin: 0,
//           uvIndexAvg: 1,
//           uvIndexMax: 5,
//           uvIndexMin: 0,
//           visibilityAvg: 9.94,
//           visibilityMax: 9.94,
//           visibilityMin: 9.94,
//           weatherCodeMax: 1000,
//           weatherCodeMin: 1000,
//           windDirectionAvg: 118.12,
//           windGustAvg: 10.15,
//           windGustMax: 18.64,
//           windGustMin: 5.16,
//           windSpeedAvg: 5.72,
//           windSpeedMax: 9.88,
//           windSpeedMin: 4.1,
//         },
//       },
//       {
//         time: "2024-04-23T10:00:00Z",
//         values: {
//           cloudBaseAvg: 0.83,
//           cloudBaseMax: 6.43,
//           cloudBaseMin: 0,
//           cloudCeilingAvg: 0.58,
//           cloudCeilingMax: 6.94,
//           cloudCeilingMin: 0,
//           cloudCoverAvg: 7.57,
//           cloudCoverMax: 54.69,
//           cloudCoverMin: 0,
//           dewPointAvg: 44.14,
//           dewPointMax: 47.28,
//           dewPointMin: 42.68,
//           evapotranspirationAvg: 0.009,
//           evapotranspirationMax: 0.024,
//           evapotranspirationMin: 0,
//           evapotranspirationSum: 0.204,
//           freezingRainIntensityAvg: 0,
//           freezingRainIntensityMax: 0,
//           freezingRainIntensityMin: 0,
//           humidityAvg: 58.42,
//           humidityMax: 94.76,
//           humidityMin: 36.11,
//           iceAccumulationAvg: 0,
//           iceAccumulationLweAvg: 0,
//           iceAccumulationLweMax: 0,
//           iceAccumulationLweMin: 0,
//           iceAccumulationLweSum: 0,
//           iceAccumulationMax: 0,
//           iceAccumulationMin: 0,
//           iceAccumulationSum: 0,
//           moonriseTime: null,
//           moonsetTime: "2024-04-23T10:34:23Z",
//           precipitationProbabilityAvg: 0,
//           precipitationProbabilityMax: 0,
//           precipitationProbabilityMin: 0,
//           pressureSurfaceLevelAvg: 29.39,
//           pressureSurfaceLevelMax: 29.47,
//           pressureSurfaceLevelMin: 29.35,
//           rainAccumulationAvg: 0,
//           rainAccumulationLweAvg: 0,
//           rainAccumulationLweMax: 0,
//           rainAccumulationLweMin: 0,
//           rainAccumulationMax: 0,
//           rainAccumulationMin: 0,
//           rainAccumulationSum: 0,
//           rainIntensityAvg: 0,
//           rainIntensityMax: 0,
//           rainIntensityMin: 0,
//           sleetAccumulationAvg: 0,
//           sleetAccumulationLweAvg: 0,
//           sleetAccumulationLweMax: 0,
//           sleetAccumulationLweMin: 0,
//           sleetAccumulationLweSum: 0,
//           sleetAccumulationMax: 0,
//           sleetAccumulationMin: 0,
//           sleetIntensityAvg: 0,
//           sleetIntensityMax: 0,
//           sleetIntensityMin: 0,
//           snowAccumulationAvg: 0,
//           snowAccumulationLweAvg: 0,
//           snowAccumulationLweMax: 0,
//           snowAccumulationLweMin: 0,
//           snowAccumulationLweSum: 0,
//           snowAccumulationMax: 0,
//           snowAccumulationMin: 0,
//           snowAccumulationSum: 0,
//           snowIntensityAvg: 0,
//           snowIntensityMax: 0,
//           snowIntensityMin: 0,
//           sunriseTime: "2024-04-23T10:54:00Z",
//           sunsetTime: "2024-04-24T00:08:00Z",
//           temperatureApparentAvg: 59.92,
//           temperatureApparentMax: 70.86,
//           temperatureApparentMin: 44.4,
//           temperatureAvg: 59.92,
//           temperatureMax: 70.86,
//           temperatureMin: 44.4,
//           uvHealthConcernAvg: 1,
//           uvHealthConcernMax: 3,
//           uvHealthConcernMin: 0,
//           uvIndexAvg: 2,
//           uvIndexMax: 7,
//           uvIndexMin: 0,
//           visibilityAvg: 9.77,
//           visibilityMax: 9.94,
//           visibilityMin: 6.04,
//           weatherCodeMax: 1000,
//           weatherCodeMin: 1000,
//           windDirectionAvg: 227.44,
//           windGustAvg: 12.76,
//           windGustMax: 19.27,
//           windGustMin: 7.83,
//           windSpeedAvg: 6.19,
//           windSpeedMax: 7.88,
//           windSpeedMin: 2.79,
//         },
//       },
//       {
//         time: "2024-04-24T10:00:00Z",
//         values: {
//           cloudBaseAvg: 1.37,
//           cloudBaseMax: 5.78,
//           cloudBaseMin: 0,
//           cloudCeilingAvg: 1.5,
//           cloudCeilingMax: 2.98,
//           cloudCeilingMin: 0,
//           cloudCoverAvg: 64.92,
//           cloudCoverMax: 100,
//           cloudCoverMin: 2.34,
//           dewPointAvg: 52.01,
//           dewPointMax: 55.05,
//           dewPointMin: 44.51,
//           evapotranspirationAvg: 0.008,
//           evapotranspirationMax: 0.024,
//           evapotranspirationMin: 0.001,
//           evapotranspirationSum: 0.184,
//           freezingRainIntensityAvg: 0,
//           freezingRainIntensityMax: 0,
//           freezingRainIntensityMin: 0,
//           humidityAvg: 65.19,
//           humidityMax: 84.22,
//           humidityMin: 42.33,
//           iceAccumulationAvg: 0,
//           iceAccumulationLweAvg: 0,
//           iceAccumulationLweMax: 0,
//           iceAccumulationLweMin: 0,
//           iceAccumulationLweSum: 0,
//           iceAccumulationMax: 0,
//           iceAccumulationMin: 0,
//           iceAccumulationSum: 0,
//           moonriseTime: "2024-04-24T00:07:20Z",
//           moonsetTime: "2024-04-24T11:02:06Z",
//           precipitationProbabilityAvg: 0.4,
//           precipitationProbabilityMax: 5,
//           precipitationProbabilityMin: 0,
//           pressureSurfaceLevelAvg: 29.35,
//           pressureSurfaceLevelMax: 29.39,
//           pressureSurfaceLevelMin: 29.3,
//           rainAccumulationAvg: 0,
//           rainAccumulationLweAvg: 0,
//           rainAccumulationLweMax: 0,
//           rainAccumulationLweMin: 0,
//           rainAccumulationMax: 0,
//           rainAccumulationMin: 0,
//           rainAccumulationSum: 0,
//           rainIntensityAvg: 0,
//           rainIntensityMax: 0,
//           rainIntensityMin: 0,
//           sleetAccumulationAvg: 0,
//           sleetAccumulationLweAvg: 0,
//           sleetAccumulationLweMax: 0,
//           sleetAccumulationLweMin: 0,
//           sleetAccumulationLweSum: 0,
//           sleetAccumulationMax: 0,
//           sleetAccumulationMin: 0,
//           sleetIntensityAvg: 0,
//           sleetIntensityMax: 0,
//           sleetIntensityMin: 0,
//           snowAccumulationAvg: 0,
//           snowAccumulationLweAvg: 0,
//           snowAccumulationLweMax: 0,
//           snowAccumulationLweMin: 0,
//           snowAccumulationLweSum: 0,
//           snowAccumulationMax: 0,
//           snowAccumulationMin: 0,
//           snowAccumulationSum: 0,
//           snowIntensityAvg: 0,
//           snowIntensityMax: 0,
//           snowIntensityMin: 0,
//           sunriseTime: "2024-04-24T10:53:00Z",
//           sunsetTime: "2024-04-25T00:09:00Z",
//           temperatureApparentAvg: 64.88,
//           temperatureApparentMax: 75.95,
//           temperatureApparentMin: 51.15,
//           temperatureAvg: 64.88,
//           temperatureMax: 75.95,
//           temperatureMin: 51.15,
//           uvHealthConcernAvg: 0,
//           uvHealthConcernMax: 2,
//           uvHealthConcernMin: 0,
//           uvIndexAvg: 1,
//           uvIndexMax: 5,
//           uvIndexMin: 0,
//           visibilityAvg: 13.01,
//           visibilityMax: 15,
//           visibilityMin: 9.94,
//           weatherCodeMax: 1001,
//           weatherCodeMin: 1001,
//           windDirectionAvg: 243.92,
//           windGustAvg: 14.29,
//           windGustMax: 20.41,
//           windGustMin: 4.32,
//           windSpeedAvg: 6.77,
//           windSpeedMax: 9.82,
//           windSpeedMin: 3.15,
//         },
//       },
//       {
//         time: "2024-04-25T10:00:00Z",
//         values: {
//           cloudBaseAvg: 0.87,
//           cloudBaseMax: 1.61,
//           cloudBaseMin: 0.16,
//           cloudCeilingAvg: 1.34,
//           cloudCeilingMax: 3.44,
//           cloudCeilingMin: 0,
//           cloudCoverAvg: 99.98,
//           cloudCoverMax: 100,
//           cloudCoverMin: 99.78,
//           dewPointAvg: 54.21,
//           dewPointMax: 57.57,
//           dewPointMin: 51.31,
//           evapotranspirationAvg: 0.004,
//           evapotranspirationMax: 0.016,
//           evapotranspirationMin: 0.001,
//           evapotranspirationSum: 0.087,
//           freezingRainIntensityAvg: 0,
//           freezingRainIntensityMax: 0,
//           freezingRainIntensityMin: 0,
//           humidityAvg: 81.89,
//           humidityMax: 95.69,
//           humidityMin: 61.31,
//           iceAccumulationAvg: 0,
//           iceAccumulationLweAvg: 0,
//           iceAccumulationLweMax: 0,
//           iceAccumulationLweMin: 0,
//           iceAccumulationLweSum: 0,
//           iceAccumulationMax: 0,
//           iceAccumulationMin: 0,
//           iceAccumulationSum: 0,
//           moonriseTime: "2024-04-25T01:07:52Z",
//           moonsetTime: "2024-04-25T11:32:55Z",
//           precipitationProbabilityAvg: 1.7,
//           precipitationProbabilityMax: 5,
//           precipitationProbabilityMin: 0,
//           pressureSurfaceLevelAvg: 29.4,
//           pressureSurfaceLevelMax: 29.45,
//           pressureSurfaceLevelMin: 29.36,
//           rainAccumulationAvg: 0,
//           rainAccumulationLweAvg: 0.01,
//           rainAccumulationLweMax: 0.07,
//           rainAccumulationLweMin: 0,
//           rainAccumulationMax: 0,
//           rainAccumulationMin: 0,
//           rainAccumulationSum: 0,
//           rainIntensityAvg: 0.01,
//           rainIntensityMax: 0.07,
//           rainIntensityMin: 0,
//           sleetAccumulationAvg: 0,
//           sleetAccumulationLweAvg: 0,
//           sleetAccumulationLweMax: 0,
//           sleetAccumulationLweMin: 0,
//           sleetAccumulationLweSum: 0,
//           sleetAccumulationMax: 0,
//           sleetAccumulationMin: 0,
//           sleetIntensityAvg: 0,
//           sleetIntensityMax: 0,
//           sleetIntensityMin: 0,
//           snowAccumulationAvg: 0,
//           snowAccumulationLweAvg: 0,
//           snowAccumulationLweMax: 0,
//           snowAccumulationLweMin: 0,
//           snowAccumulationLweSum: 0,
//           snowAccumulationMax: 0,
//           snowAccumulationMin: 0,
//           snowAccumulationSum: 0,
//           snowIntensityAvg: 0,
//           snowIntensityMax: 0,
//           snowIntensityMin: 0,
//           sunriseTime: "2024-04-25T10:52:00Z",
//           sunsetTime: "2024-04-26T00:09:00Z",
//           temperatureApparentAvg: 60.11,
//           temperatureApparentMax: 68.89,
//           temperatureApparentMin: 53.87,
//           temperatureAvg: 60.11,
//           temperatureMax: 68.89,
//           temperatureMin: 53.87,
//           uvHealthConcernAvg: 1,
//           uvHealthConcernMax: 3,
//           uvHealthConcernMin: 0,
//           uvIndexAvg: 3,
//           uvIndexMax: 7,
//           uvIndexMin: 0,
//           visibilityAvg: 14.58,
//           visibilityMax: 15,
//           visibilityMin: 10.32,
//           weatherCodeMax: 1001,
//           weatherCodeMin: 1001,
//           windDirectionAvg: 86.72,
//           windGustAvg: 11.28,
//           windGustMax: 17.73,
//           windGustMin: 4.51,
//           windSpeedAvg: 4.89,
//           windSpeedMax: 7.17,
//           windSpeedMin: 3.69,
//         },
//       },
//       {
//         time: "2024-04-26T10:00:00Z",
//         values: {
//           cloudBaseAvg: 0.3,
//           cloudBaseMax: 0.59,
//           cloudBaseMin: 0.01,
//           cloudCeilingAvg: 2.25,
//           cloudCeilingMax: 2.59,
//           cloudCeilingMin: 1.9,
//           cloudCoverAvg: 100,
//           cloudCoverMax: 100,
//           cloudCoverMin: 100,
//           dewPointAvg: 55.2,
//           dewPointMax: 56.02,
//           dewPointMin: 54.37,
//           evapotranspirationAvg: 0.001,
//           evapotranspirationMax: 0.001,
//           evapotranspirationMin: 0.001,
//           evapotranspirationSum: 0.004,
//           freezingRainIntensityAvg: 0,
//           freezingRainIntensityMax: 0,
//           freezingRainIntensityMin: 0,
//           humidityAvg: 96.87,
//           humidityMax: 97.95,
//           humidityMin: 95.78,
//           iceAccumulationAvg: 0,
//           iceAccumulationLweAvg: 0,
//           iceAccumulationLweMax: 0,
//           iceAccumulationLweMin: 0,
//           iceAccumulationLweSum: 0,
//           iceAccumulationMax: 0,
//           iceAccumulationMin: 0,
//           iceAccumulationSum: 0,
//           moonriseTime: "2024-04-26T02:11:21Z",
//           moonsetTime: "2024-04-26T12:11:12Z",
//           precipitationProbabilityAvg: 7.5,
//           precipitationProbabilityMax: 10,
//           precipitationProbabilityMin: 5,
//           pressureSurfaceLevelAvg: 29.47,
//           pressureSurfaceLevelMax: 29.48,
//           pressureSurfaceLevelMin: 29.46,
//           rainAccumulationAvg: 0,
//           rainAccumulationLweAvg: 0,
//           rainAccumulationLweMax: 0.02,
//           rainAccumulationLweMin: 0,
//           rainAccumulationMax: 0,
//           rainAccumulationMin: 0,
//           rainAccumulationSum: 0,
//           rainIntensityAvg: 0.01,
//           rainIntensityMax: 0.02,
//           rainIntensityMin: 0,
//           sleetAccumulationAvg: 0,
//           sleetAccumulationLweAvg: 0,
//           sleetAccumulationLweMax: 0,
//           sleetAccumulationLweMin: 0,
//           sleetAccumulationLweSum: 0,
//           sleetAccumulationMax: 0,
//           sleetAccumulationMin: 0,
//           sleetIntensityAvg: 0,
//           sleetIntensityMax: 0,
//           sleetIntensityMin: 0,
//           snowAccumulationAvg: 0,
//           snowAccumulationLweAvg: 0,
//           snowAccumulationLweMax: 0,
//           snowAccumulationLweMin: 0,
//           snowAccumulationLweSum: 0,
//           snowAccumulationMax: 0,
//           snowAccumulationMin: 0,
//           snowAccumulationSum: 0,
//           snowIntensityAvg: 0,
//           snowIntensityMax: 0,
//           snowIntensityMin: 0,
//           sunriseTime: "2024-04-26T10:51:00Z",
//           sunsetTime: "2024-04-27T00:10:00Z",
//           temperatureApparentAvg: 56.08,
//           temperatureApparentMax: 56.6,
//           temperatureApparentMin: 55.56,
//           temperatureAvg: 56.08,
//           temperatureMax: 56.6,
//           temperatureMin: 55.56,
//           visibilityAvg: 11.04,
//           visibilityMax: 11.59,
//           visibilityMin: 10.5,
//           weatherCodeMax: 4200,
//           weatherCodeMin: 4200,
//           windDirectionAvg: 73.02,
//           windGustAvg: 14.34,
//           windGustMax: 16.26,
//           windGustMin: 12.43,
//           windSpeedAvg: 5.49,
//           windSpeedMax: 6.15,
//           windSpeedMin: 4.83,
//         },
//       },
//     ],
//   },
//   location: {
//     lat: 33.92641830444336,
//     lon: -83.34255981445312,
//     name: "30605, Athens-Clarke County Unified Government, Athens-Clarke County, Georgia, United States",
//     type: "postcode",
//   },
// };

//apiKey
// const apiKey = "f036c23ce0d0e31d5d459fd8c27e0cda"; //openweather
// const apiKey2 = "R4Ce0bEsRFRfx90UteM652oaJfkUnQYQ"; //tomorrow.io

const cityNameInput = document.querySelector(".selection__city__input");
const minTempInput = document.querySelector(".selection__mintemp__input");
const maxTempInput = document.querySelector(".selection__maxtemp__input");
const plantInstructions = document.querySelector(
  ".plant__instructions__content"
);
const plantInstructionsContainer = document.querySelector(
  ".plant__instructions__container"
);
const forecastContainer = document.querySelector(".forecast__container");
const gridBoxes = document.querySelectorAll(".grid__box");
const form = document.querySelector(".selection__container__form");
const headerCity = document.querySelector(".header__city");
const firstBox = document.getElementById("day__one");

plantInstructionsContainer.style.display = "none";
forecastContainer.style.display = "none";
// const city = form.elements.city.value;

// Individual forecast grid boxes #day__one, day__two, etc.

//Functions

function fetchWeatherData(location) {
  return fetch(
    `https://api.tomorrow.io/v4/weather/forecast?location=${location}&timesteps=1d&units=imperial&apikey=R4Ce0bEsRFRfx90UteM652oaJfkUnQYQ`
  )
    .then((response) => response.json())

    .catch((err) => {
      console.error(err);
      throw err;
    });
}

function setPlantInstructions() {
  if (firstBox.innerHTML.includes("Inside")) {
    plantInstructions.innerHTML = "bring your plant babies inside ";
  } else if (firstBox.innerHTML.includes("Outside")) {
    plantInstructions.innerHTML = "leave the plant babies outside ";
  } else {
    plantInstructions.innerHTML = "_______";
  }
  plantInstructionsContainer.style.display = "block";
  forecastContainer.style.display = "block";
}

function handleSubmit(e) {
  e.preventDefault();
  console.log("form submitted");

  fetchWeatherData(30605)
    .then((data) => {
      // Use the fetched weather data
      updateForecastBoxes(data);
      setPlantInstructions();
    })
    .catch((error) => {
      // Handle errors
      console.error(error);
    });
}

function updateForecastBoxes(data) {
  console.log(data);
  const dailyData = data.timelines.daily;
  for (let i = 0; i < gridBoxes.length; i++) {
    const minTemp = Number(form.elements.mintemp.value);
    const maxTemp = Number(form.elements.maxtemp.value);
    const forecastMinTemp = Math.floor(dailyData[i].values.temperatureMin);
    const forecastMaxTemp = Math.floor(dailyData[i].values.temperatureMax);
    const dateString = dailyData[i].time;
    const date = new Date(dateString);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const formattedDate = `${month.toString()}/${day.toString()}`;
    let instructions = "";

    if (forecastMinTemp < minTemp || forecastMaxTemp > maxTemp) {
      instructions = "🏠 Inside";
    } else {
      instructions = "🌛 Outside";
    }

    console.log(
      "info for box ",
      "formax",
      forecastMaxTemp,
      "max",
      maxTemp,
      "formin",
      forecastMinTemp,
      "min",
      minTemp,
      "instructions",
      instructions
    );

    gridBoxes[
      i
    ].innerHTML = ` ${formattedDate} <p class="day__instructions">${instructions}</p><span class="forecast__minmax">${forecastMinTemp}°–${forecastMaxTemp}°</span>
          `;
  }
}

//Event listeners
// cityNameInput.addEventListener("change", () => {
//   let cityName = cityNameInput.value;
//   console.log("city name is ", cityName);
//   return cityName;
// });

minTempInput.addEventListener("change", () => {
  let minTemp = minTempInput.value;
  console.log("min temp is ", minTemp);
  return minTemp;
});

maxTempInput.addEventListener("change", () => {
  let maxTemp = maxTempInput.value;
  console.log("max temp is ", maxTemp);
  return maxTemp;
});

form.addEventListener("submit", handleSubmit);
