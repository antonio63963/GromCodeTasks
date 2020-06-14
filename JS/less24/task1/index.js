

export const dayOfWeek = (date, days) => {
     const daysArr = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St'];
     const day = new Date(date).getDate();
     const futureDayMillisec = new Date(date).setDate(day + days);
     const futureDay = new Date(futureDayMillisec);

     console.log(daysArr[futureDay.getDay()]);
     return daysArr[futureDay.getDay()];
 };

