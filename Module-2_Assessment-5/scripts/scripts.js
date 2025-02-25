let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let output = "";

for (let month of months) {

  switch (month) {
    case "January":
      output += `${month}: New Years Day, National Bird Day, Houseplant Appreciation Day, MLK Day<br><br>`
      break;
    case "February":
      output += `${month}: Groundhog's Day, Valentines Day, President's Day<br><br>`
      break;
    case "March":
      output += `${month}: Mardi Gras, St. Patrick's Day, International Women's Day<br><br>`
      break;
    case "April":
      output += `${month}: April Fools Day, Easter, Arbor Day<br><br>`
      break;
    case "May":
      output += `${month}: Star Wars Day, Cinco de Mayo, Mother's Day, Memorial Day<br><br>`
      break;
    case "June":
      output += `${month}: Flag Day, Father's Day, Juneteenth<br><br>`
      break;
    case "July":
      output += `${month}: Independence Day, National Bikini Day, Hammock Day<br><br>`
      break;
    case "August":
      output += `${month}: National Smores Day, Left Hander's Day, National Marshmallow Toasting Day<br><br>`
      break;
    case "September":
      output += `${month}: Labor Day, Grandparents Day, Native American Day<br><br>`
      break;
    case "October":
      output += `${month}: Indigenous People's Day, Halloween<br><br>`
      break;
    case "November":
      output += `${month}: Veteran's Day, Jonah's Birthday, Thanksgiving<br><br>`
      break;
    case "December":
      output += `${month}: Christmas, Boxing Day, Kwanzaa, New Year's Eve<br>`
      break;
    default:
      output = "That isn't a month."
  }
}

document.getElementById("holidays").innerHTML = output;