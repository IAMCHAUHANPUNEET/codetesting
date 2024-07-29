export function codetest(code) {
  let result = null;
  let isSuccess = false;

  try {
    if (typeof code === 'string') {
      result = eval(code);
    } else {
 
      result = code;
    }
    isSuccess = true;
  } catch (e) {

    console.error(e.message);
  }

  if (isSuccess) {
    console.log("your code is correct")
  }
}
codetest("console.log('hello')")