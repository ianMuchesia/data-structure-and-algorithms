function towerOfHanoi(n, source,auxilliary,target) {
  
  if (n === 1) {
    console.log(`Move Disk from ${source} to ${target} this is last`);
    return
  }


  towerOfHanoi(n - 1, source, target, auxilliary);

  console.log(`Move Disk from ${source} to ${target}`);
  towerOfHanoi(n - 1, auxilliary,source, target);

}
towerOfHanoi(3, "A", "B", "C");
