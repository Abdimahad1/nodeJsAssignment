function determineTargets(begin, close, yearlyGoal) {
  let from = new Date(begin);
  let to = new Date(close);
  let now = new Date(from);

  let noFridayCount = [];
  let actualWorkDays = [];
  let monthlyQuota = [];

  let workDaysSum = 0;

  while (now <= to) {
      let currentYear = now.getFullYear();
      let currentMonth = now.getMonth();

      let daysThisMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
      let activeDays = 0;

      for (let i = 1; i <= daysThisMonth; i++) {
          let thisDay = new Date(currentYear, currentMonth, i);
          if (thisDay.getDay() !== 5) { 
              activeDays++;
          }
      }
      noFridayCount.push(activeDays);

      let realDaysWorked = 0;
      for (let i = now.getDate(); i <= daysThisMonth; i++) {
          let dayChecking = new Date(currentYear, currentMonth, i);
          if (dayChecking > to) break;
          if (dayChecking.getDay() !== 5) {
              realDaysWorked++;
          }
      }
      actualWorkDays.push(realDaysWorked);

      workDaysSum += realDaysWorked;

      now.setMonth(now.getMonth() + 1);
      now.setDate(1);
  }

  for (let work of actualWorkDays) {
      monthlyQuota.push((yearlyGoal / 365) * work);
  }

  let totalCalculatedTarget = monthlyQuota.reduce((result, item) => result + item, 0);

  return {
      noFridayCount,
      actualWorkDays,
      monthlyQuota,
      totalCalculatedTarget
  };
}

console.log(determineTargets('2024-01-01', '2024-03-31', 5220));
