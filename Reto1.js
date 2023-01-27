function wrapping(gifts) {
  const giftsWrapped = [];
    for(let i=0; i<gifts.length; i++){
        console.log(gifts[i]);
        let x = gifts[i].length + 2;
        giftsWrapped.push(`${''.repeat(x)}\n${gifts[i]}\n${''.repeat(x)}`);
    }
    return giftsWrapped;
}