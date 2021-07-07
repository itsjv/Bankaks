# Bankaks Hiring Challenge

## Tasks
#### 1. Dockerize, customise and deploy microservices
- An internal microservice which can read and write data to the data store
- An external microservice which can only read data from the data store by making calls to the internal microservice
- Dockerize both the services so they can run as independent containers
- Deploy this application so both the services are publicly available and are able to talk to each other

#### 2. Remote Data Store
- Create and deploy a remote data store to house the data from the internal microservice
- Pre-populate the data store and design your DB layer using following JSON:
```JSON
{
    "cars": [
        {
            "id": "JHk290Xj",
            "make": "Ford",
            "model": "F-10",
            "package": "Base",
            "color": "Silver",
            "year": "2010",
            "category": "Truck",
            "mileage": "120123"
        },
        {
            "id": "fWI37Ia",
            "make": "Toyota",
            "model": "Camry",
            "package": "SE",
            "color": "White",
            "year": "2019",
            "category": "Sedan",
            "mileage": "3999"
        },
        {
            "id": "1i3xjRIIc",
            "make": "Toyota",
            "model": "Rav4",
            "package": "XSE",
            "color": "Red",
            "year": "2018",
            "category": "SEV",
            "mileage": "24001"
        },
        {
            "id": "dku43920s",
            "make": "Ford",
            "model": "Bronco",
            "package": "Badlands",
            "color": "Bumt Orange",
            "year": "2022",
            "category": "SUV",
            "mileage": "1"
        }
    ]
}
```

#### 3. Documentation
- Create a quick documentation on how to access the microservices
- Features, patterns and technologies used
- Create a quick write-up on how you would deploy your code on a cloud platform like AWS, Azure, etc,. Feel free to create a flowchart as well.

#### Notes
- Do not spend more than 3 to 4 hours on the task
- Although you're free to pick and choose technology as per your preference, we recommend the following tech-stack (NodeJS, Docker, MongoDB/MySQL, AWS ECS)
- Feel free to cut corners, but make a note where you do, and be prepared to explain what you would do in a production context

#### Be prepared to talk about
- What you did, how you did it, and how long it took
- Talk about the tech stack and any libraries used in your project and why you chose them

#### Bonus
- Authentication
- Deployment pipeline using AWS Codedeploy

Your design and code should meet these requirements and be sufficiently fexible to allow for future extensibility. 

Code should be well structured and suitably commented.
