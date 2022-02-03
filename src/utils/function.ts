export const registrationErrorHandler = (errResp: {data: any}): string[] => {
  const errData = errResp.data;
  const errorArray = [];
  for (let key in errData) {
    if (Array.isArray(errData[key])) {
      errorArray.push(errData[key].join());
    }
    if (typeof errData[key] === "string") {
      errorArray.push(errData[key]);
    }
  }
  return errorArray;
}
