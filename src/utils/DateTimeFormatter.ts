/** *****************************************************************
  | Author            : @deniprobow
  | Name              : DateTimeFormatter.ts
  | Updater           : @deniprobow
  | last_change       : 2023-08-05
  | Description_update: -
  | Description       : DateTimeFormatter Util Helper For Convert DateTime
  *******************************************************************/

function DateFormatter(dateTime:String){
    const date = new Date(dateTime+'.000Z');
    const formattedDate = date.toLocaleDateString('sv-SE');
    return formattedDate;
}

function DateTimeFormatter(){
    const date = new Date();
    const formattedDate = date.toLocaleDateString('sv-SE')+"T"+date.toLocaleTimeString('sv-SE');
    return formattedDate;
}

function TimeHourMinuteFormatter(dateTime:String){
    const date = new Date(dateTime+'.000Z');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
}

function TimeFullFormatter(dateTime:String){
    const date = new Date(dateTime+'.000Z');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${hours}:${minutes}:${seconds}`;
}

export {DateFormatter, DateTimeFormatter, TimeHourMinuteFormatter, TimeFullFormatter};