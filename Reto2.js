function countHours(year, holidays) {
    let extraHours = 0;
    holidays.forEach(holiday => {
      const fecha = new Date(`${holiday}/${year}`);
      const dayOfWeek = fecha.getDay();
      if(dayOfWeek > 0 && dayOfWeek <6) {
        extraHours += 2;
      }
    })
    return extraHours;
  }