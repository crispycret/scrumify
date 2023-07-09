# Scrumify - CMSBackend

 The Backend Content Management System API for the scrumify application.

### Contains a common core express.js application for features:

 * Database Connection (See Development Environment Steps)
 
 * User

   * Authentaction requirements to access user related data. 
    
   * Provides additional authentication features such as email, sms and other two-factor authentication options.


 This common-core express.js application should be isolated into it's own repo for buidling new applications easier. Perhaps make it an isolated API service that other applications can use all under the ubrellia of the same network of application that I am building. Or, to use as quick starting point to a new application for work unrelated to any of the other connected applications.

### Contains a custom wrapper to utilizes the core to build application specific features 

 * Projects 



## Development Environment Steps

 After cloning the application it is important to setup the required environment and configuration settings for the application to function.

 #### Dependancies
  First, navigate into the projects root directory then run the following command to install the required dependancies.

  ```
  npm i
  ```


 #### Database

  This application only allows for MongoDB connections for now. This will change to allowing MongoDB access to node and python applications. Any PostgreSQL application will be python only for the foreseeable future.

  If using a local machine to host your database while in development you need to set that up now. Otherwise, simply set the `DATABASE_URI` variable in the root `.env` file to your database `endpoint`.
  
  * Follow the offical installation for [`MongoDB here`](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/) to install the database server on your local machine.

  * Next we should setup some security mechanisms to secure database access.
   
   [Insert Steps on Database Security (users/permissions) and Firewalling here]

  After installing and securing the database, add your `database endpoint` to the projects root `.env` file as the variable `DATABASE_URI=mongodb://db_username@localhost:3306`


  
 #### Other Required Configurations
  [Add additional configurations steps here.]




## Production Steps