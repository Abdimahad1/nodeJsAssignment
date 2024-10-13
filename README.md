# nodeJsAssignment

# Project Description
This project provides a JavaScript function named determineTargets that calculates monthly targets based on working days within a given date range, excluding Fridays. 
It is designed to help with goal management by breaking down annual goals into monthly quotas, taking into account actual working days (excluding Fridays) to ensure a realistic distribution of workload.

# The function determines:
The number of working days in each month (excluding Fridays).
Actual workdays for each month within the specified date range.
Monthly quotas based on the yearly goal and the actual number of working days.
The total target that needs to be met over the specified date range.
How to Run the Code
# Prerequisites How to run the code:
Ensure that Node.js is installed on your system.
# Steps:
Copy the function determineTargets into a JavaScript file, e.g., main.js.
Open your terminal and navigate to the directory where the file is saved.
Run the following command to execute the code:
node main.js

# Example Execution:
After running the code, you can use the following test case:
console.log(determineTargets('2024-01-01', '2024-03-31', 5220));

# Expected Output:

 {
    noFridayCount: [22, 20, 21],
    actualWorkDays: [22, 20, 21],
    monthlyQuota: [314.3, 285.1, 299.7],
    totalCalculatedTarget: 899.1
}

# Function Explanation
# Parameters:
begin: A string representing the start date in the format 'YYYY-MM-DD' (e.g., '2024-01-01').
close: A string representing the end date in the format 'YYYY-MM-DD' (e.g., '2024-03-31').
yearlyGoal: A number representing the total goal for the entire year (e.g., 5220 units of work).

# Logic Breakdown:
Date Handling: The function calculates the number of days in each month between the begin and close dates.
Exclusion of Fridays: For each month, it excludes all Fridays from the total workdays, counting only the remaining weekdays as valid working days.
Monthly Quotas: The yearly goal is divided by 365 to determine the daily quota. This quota is then multiplied by the number of working days in each month to determine the monthly quotas.
Total Target: The total target for the specified period is calculated by summing the monthly quotas.

# Output:
noFridayCount: An array representing the total number of working days (excluding Fridays) for each month.
actualWorkDays: An array representing the actual number of working days available in each month.
monthlyQuota: An array representing the calculated monthly work quota based on the yearly goal.
totalCalculatedTarget: The total target for the period between the start and end date.

# Assumptions and Limitations
Calendar System: The function is designed to work with the Gregorian calendar.
Excluding Fridays: The function assumes Fridays are non-working days. Other non-working days like weekends, holidays, or special off-days are not accounted for.
Equal Distribution of Goals: The function assumes that the goal is distributed evenly across the year. It does not adjust for potential holidays or non-working periods beyond Fridays.
