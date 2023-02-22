function dontGiveMeFive(start, end)
{
  count = 0;
  for(let i=start; i<= end; i++){
    // Check if number is a 5
    presence = (i+'').indexOf('5')
    // If not add to the count tally
    if (presence === -1){count += 1}
  }
  return count;
}