# MyReads: a Book Manager

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

**MyReads** was created as part of *Udacity's React Nanodegree Program* and fulfills the MyReads application rubric.

## Project Description

The application contains two main routes ('/', '/search') which allow for a user to add and manage their books in a virtual library of shelves: *Currently Reading*, *Read Later*, and *Completed*.

When a user enters the application, their shelves are displayed, where they can move or remove books from their library. Navigating to the search page allows for a user to search for new books and manage each book's read status.

### Caveats

Since the provided BookAPI's update method was not working, the shelf of a book is only maintained in local state and is not stored permanently. This means that refreshing the page will not display updates, even though the state is maintained across route changes on the search and home pages. This is noted in the code where calls were made to the API without success.

## Running the Project

Before starting the project, you will need to add the required scripts to your project. These dependencies are noted in `package.json` and can be added to your project by running:

```
$ npm install
```

Once dependencies are installed and you're ready to start the project, you can run:

```
$ npm start
```

This runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

## Further Reading

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).