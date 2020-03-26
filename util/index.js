 define(["dojo/Deferred"], function(Deferred){
  return {
    getBase64: value => {
      const reader = new FileReader();
      const myDeferred = new Deferred();
      reader.onload = () => {
        myDeferred.resolve(reader.result);
      }
      reader.readAsDataURL(value);
      return myDeferred;
    }
  }
 });
