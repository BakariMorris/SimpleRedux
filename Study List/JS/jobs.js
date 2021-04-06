/* 
### Jobs In A CI/CD Build System

Given an array describing jobs in a build system, and a job ID, determine the total time required to complete this job (and all of its dependents).

jobs = [
    # job_id, job_execution_duration, dependent_job_ids
    [3, 20, []],
    [1, 30, [2,4]],
    [2, 10, [3]],
    [4, 60, []]
]

find_total_job_time(jobs, 1) # 30 + (10+20) + 60 = 120
find_total_job_time(jobs, 2) # 10 + 20 = 30
find_total_job_time(jobs, 4) # 60

const jobs = [
    [5, 50, []],
    [3, 20, [5]],
    [1, 30, [2,4]],
    [2, 10, [3]],
    [4, 60, []]
]




 */
function getJobTime (jobs, jobID) {
  let totalTime = 0;
  
  console.log(jobs[jobID], 'job');
  
  if(jobs[jobID][2].length) {
    while(jobs[jobID][2].length){
      totalTime += getJobTime(jobs, jobs[jobID][2].shift());
    }
  }
  
  return totalTime += jobs[jobID][1];
}
  
    
const jobs = [
    [3, 20, []],
    [1, 30, [2,4]],
    [2, 10, [3]],
    [4, 60, []]
]

let testArr = [1,2,3];
getJobTime(jobs);