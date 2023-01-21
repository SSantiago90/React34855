export function useDeepCopy(oldObj) {
  console.log("Copy in progress");
  let newObject = JSON.parse(JSON.stringify(oldObj));
  return newObject;
}
