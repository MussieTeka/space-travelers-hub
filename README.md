<a id="readme-top"></a>

<div align="center">
    <br>
  <h1 style="font-size: 35px; color: lightblue"><b>The Space Travelers' Hub</b></h1>
</div>

# 📗 Table of Contents <a id="table-of-contents"></a>

- [� Table of Contents](#table-of-contents)
- [📖 Space Travelers' Hub ](#about-project)
- [🛠 Built With ](#built-with)
  - [Tech Stack ](#tech-stack)
  - [Key Features ](#key-features)
- [🚀 Live Demo ](#live-demo)
- [🎬 Representation](#representation)
- [💻 Getting Started ](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
  - [Usage](#usage)
  - [Deployment](#deployment)
- [👥 Authors ](#authors)
- [🔭 Future Features ](#future-features)
- [🤝 Contributing ](#contributing)
- [⭐️ Show your support ](#️support)
- [🙏 Acknowledgments ](#acknowledgements)
- [❓ FAQ ](#faq)
- [📝 License ](#license)

<br>

# 📖 Space Travelers' Hub <a id="about-project"></a>

**The Space Travelers' Hub** is a webapp that fetches data from the [rockets](https://api.spacexdata.com/v3/rockets) endpoint API from space X and also from the [mission](https://api.spacexdata.com/v3/missions) endpoint API. The Space Travelers' Hub is a web application that allows users to explore and reserve space missions and rockets. Users can join missions, leave missions, and view their reserved missions and rockets in their profile.
## 🛠 Built With <a id="built-with"></a>

### Tech Stack <a id="tech-stack"></a>

<details>

  <summary>Technology</summary>
  
  - [React](https://reactjs.org/) - A JavaScript library for building user interfaces
  - [Redux](https://redux.js.org/) - A predictable state management library for JavaScript applications. 
  - [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - A high-level programming language used for web development.
  - [npm](https://www.npmjs.com/) - A package manager for the Node.js runtime environment
  - [Create React App](https://create-react-app.dev/) - A tool used to quickly set up a modern React web application with no build configuration required.
  - [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) - A markup language used for creating web pages
  - [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) - A style sheet language used for describing the presentation of a document written in HTML

</details>

<details>
  <summary>Tools</summary>
  <ul>
    <li><a href="https://code.visualstudio.com/">VSCode</a></li>
    <li><a href="https://git-scm.com/">Git</a></li>
    <li><a href="https://nodejs.org/en">node</a></li>
    <li><a href="https://www.npmjs.com/">npm</a></li>
    <li><a href="https://webpack.js.org/guides/getting-started/">webpack</a></li>
  </ul>
</details>
<br/>
<!-- Features -->

### Key Features <a id="key-features"></a>

- **Ability to book a rocket**
- **Ability to cancel rocket booked**
- **Users can click to join a mission**
- **Users can also click to cancel mission joined**
- **Ability to view and manage your reserved missions and rockets in the profile page**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🚀 Live Demo <a id="live-demo"></a>

- Click [here](https://skabeo-space.onrender.com/) to view the live Demo. 

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 💻 Getting Started <a id="getting-started"></a>
<br>

### Prerequisites

In order to reproduce the Space Travelers' Hub and be able to make changes for your own purpose, you need the following tools:
- [Visual Studio Code](https://code.visualstudio.com/)
- [git-scm](https://git-scm.com/)
- A [Github](https://github.com/) account
- [NodeJS](https://nodejs.org/) (which also includes npm package manager)

### Setup

Clone this repository to your desired folder by running the following command:

```sh
  clone git@github.com:MussieTeka/space-travelers-hub.git
```

### Install

To use this application, you need to have Node.js installed on your machine. Once you have Node.js installed,

Run npm install to install all dependencies

```sh
  cd space-travelers-hub
  npm install

```
### Usage

To build the project:

```sh
  npm run build

```

Run npm start to start and view the project in browsers:

```sh
  npm start

```

### Run tests

To run tests for the To Do List App, follow these steps:

- Open the command prompt or terminal on your computer.
- Navigate to the project directory using the cd command.
- Type the command npm run test and press enter.

```sh
 npm run test
```

This will open the app in your browser at `http://localhost:3000`.

### Deployment

To deploy the Space Travelers' Hub to a live environment, you can follow these steps:

1. Build the production-ready version of the application/

2. Deploy the contents of the `build` directory to your preferred hosting platform.

- If you're using [Netlify](https://www.netlify.com/), you can follow their documentation on [deploying a React application](https://docs.netlify.com/configure-builds/common-configurations/react/).

- If you're using [Vercel](https://vercel.com/), you can follow their documentation on [deploying a Next.js application](https://vercel.com/docs/platform/deployments#deploying-next.js).

- If you're using other hosting platforms, please refer to their documentation for deploying static websites.

3. Once deployed, access the live version of the application.


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 👥 Authors <a id="authors"></a>

👤 **Mussie Teka**

- GitHub: [@MussieTeka](https://github.com/MussieTeka)
- Twitter: [@MussieTeka](https://twitter.com/MussieTeka)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/mussieteka/)

👤 **Spencer Okyere**

- GitHub: [@skabeo](https://github.com/skabeo)
- Twitter: [@black_okyere](https://twitter.com/black_okyere)
- LinkedIn: [LinkedIn](https://linkedin.com/in/spencer-okyere)


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🔭 Future Features <a id="future-features"></a>

- A button remove button to cancel both rocket and mission reservations
- Mobile Version
- User authentication and account creation: Allow users to create accounts and authenticate with credentials for a personalized experience.
- Notifications and updates: Implement a notification system to inform users about mission updates, new rocket launches, or important announcements.
- Advanced search and filtering: Enhance the mission and rocket browsing experience by adding advanced search and filtering options based on criteria such as launch date, mission type, rocket capacity, etc.
- Social sharing: Enable users to share their reserved missions or favorite rockets on social media

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🤝 Contributing <a id="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

If you would like to contribute to this project, you can follow these steps:

1. Fork the repository.
2. Create a new branch for your changes.
3. Make your changes and commit them.
4. Push your changes to your forked repository.
5. Create a pull request back to the original repository.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## ⭐️ Show your support <a id="support"></a>

If you like this project, please give it a star on GitHub.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🙏 Acknowledgments <a id="acknowledgements"></a>

I would like to express my gratitude to the following individuals and organizations for their contributions to this project:

- [React](https://reactjs.org/): JavaScript library for building user interfaces
- [Create React App](https://create-react-app.dev/): Tool for creating React applications with zero configuration
- [GitHub](https://github.com/): Platform for version control and collaboration
- [Microverse](https://www.microverse.org/): Global school for remote software developers

Special thanks to [SpaceX](https://www.spacex.com/) for providing the data through their API, which made this project possible.


<p align="right">(<a href="#readme-top">back to top</a>)</p>


## ❓ FAQ <a id="faq"></a>

- **Can I modify and redistribute this project?**

  - Yes, you can modify and redistribute this project as long as you follow the terms of the MIT license.

- **How can I contribute to this project?**

  - Contributions, issues, and feature requests are welcome! You can check the issues page to see if there are any current issues or feature requests that you can work on. If not, feel free to submit a new issue or pull request. Before contributing, please read the CONTRIBUTING.md file for guidelines on how to contribute to this project.
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 📝 License <a id="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
