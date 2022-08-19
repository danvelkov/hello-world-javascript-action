const core = require('@actions/core');
const github = require('@actions/github');

try {
  const result = getAllVariants();
  console.log(result);
} catch (error) {
  core.setFailed(error.message);
}

function getAllVariants() {
  let idArray = [];
  var httpResponse = httpClient.get("https://myvariant.info/v1/query?q=cadd.phred:%3E70&cdk*&size=1&from=0");
  const myVariantJSON = JSON.parse(httpResponse.text);
  let total = myVariantJSON.total;
  let i = 0;
  do {
      console.log("\n\n\n\n\n" + total);
      var httpResponseNext = httpClient.get("https://myvariant.info/v1/query?q=cadd.phred:%3E70&cdk*&size=5&from=" + i);
      const myVariantJSONNext = JSON.parse(httpResponseNext.text);
      myVariantJSONNext.hits.forEach(hit => {
          console.log(JSON.stringify(hit._id))
          idArray.push(hit._id)

      })
      i += 5;
      total -= 5;
      console.log(idArray)
      console.log(idArray.length)
  } while (total > 952)
	  
  core.setOutput("time", idArray);
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
}