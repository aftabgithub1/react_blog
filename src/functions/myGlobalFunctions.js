import { format } from "date-fns"; // to install the package, type 'npm i date-fnd -S' in the project folder terminal
// root folder
const root = "/react_blog";

// auto increment id
const newId = (items) => {
  let id = items.length ? items[items.length - 1].id + 1 : 1;
  return id;
}

// sets current date in the database server
const postDateTime = () => {
  let date = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
  return date;
} 

// displays post date in a format 'Sunday January 16, 2022 - 9:32:55 PM'
const postDateFormat = (postDate) => {
  let date = format(new Date(postDate), 'iiii MMMM dd, yyyy - pp');
  return date;
} 

export { root, newId, postDateTime, postDateFormat } // named export module
