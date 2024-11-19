
  

  

## Turfs

  

![Turfs](https://r2.fivemanage.com/pub/fb81emjhm3r5.png)
This repository contains the complete user interface (UI) source code for a [FiveM](https://fivem.net/) turf system resource. The UI code is designed to interact with the FiveM resource's backend via defined APIs and locally for development purposes.

*Note*: This repository does not include server-side or core gameplay logic, which is maintained in a separate repository.

## Features

- Gang Management

	-  Roster Management: Allows users to view and manage gang members, including recruiting new members and setting roles.

	-   Roster Table: Displays a list of gang members with details such as name, role, and online status.

	-   Recruitment: Users can recruit nearby players into the gang.

	-   Role Management: Users can set roles for gang members.

- Turf Management

	-   Turf Overview: Displays information about the gang's turfs, including current control status and potential upgrades.

	-   Map Integration: Uses Leaflet to display a map with gang turfs, allowing users to view and interact with them.

	-   Turf Actions: Provides actions related to turfs, such as viewing detailed information and finding turfs on the map.

-   Multi-language Support

### Built With

* [![React][React.js]][React-url]
* [![Mantine][Mantine]][Mantine-url]
* [![Jotai][Jotai]][Jotai-url] 
* [![TanStack-Query][TanStack-Query]][TanStack-Query-url] 
* [![Leaflet][Leaflet]][Leaflet-url] 

  

## Installation
1. Clone the repo
2. Navigate to the web folder
	```sh
	cd web
	```
3. Install NPM packages
	```sh
	npm  install
	```

4. Run locally
	```sh
	npm  run  start
	```
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Mantine-url]: https://mantine.dev/
[Mantine]:https://img.shields.io/badge/Mantine-white?style=for-the-badge&logo=mantine
[Jotai]:https://img.shields.io/badge/Jotai-0C0C0C?style=for-the-badge&logo=jotai
[Jotai-url]:https://jotai.org/
[Tabler-Icons]:https://img.shields.io/badge/Tabler%20Icons-121B28?style=for-the-badge&logo=tablericons
[Tabler-Icons-url]:https://tabler.io/icons
[TanStack-Query]:https://img.shields.io/badge/TanStack%20Query-030712?style=for-the-badge&logo=tanstack
[TanStack-Query-url]:https://tanstack.com/query/latest
[Leaflet]:https://img.shields.io/badge/Leaflet-BAE568?style=for-the-badge&logo=leaflet
[Leaflet-url]:https://leafletjs.com/