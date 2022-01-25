import { format } from "date-fns"; // to install the package, type 'npm i date-fnd -S' in the project folder terminal

const newId = (items) => {
  let id = items ? items[items.length - 1].id + 1 : 1;
  return id;
}

const postDateTime = () => {
  let date = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
  return date;
} // sets current date in the database server

const postDateFormat = (postDate) => {
  let date = format(new Date(postDate), 'iiii MMMM dd, yyyy - pp');
  return date;
} // displays post date in a format 'Sunday January 16, 2022 - 9:32:55 PM'

export { newId, postDateTime, postDateFormat } // named export module
