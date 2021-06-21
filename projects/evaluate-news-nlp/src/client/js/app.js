        export const postUpdates = async (response) => {
          //const entries = await fetch('/urlPost');
          console.log(response)
          console.log('8')
          try {
            // const nlpData = await entries.json();
            const resultString = `Score tag: ${response.score_tag}; Irony: ${response.irony}; Confidence: ${response.confidence}; Subjectivity: ${response.subjectivity}`
            document.getElementById('results').innerHTML = `Evaluation on entered URL is: ${resultString}`;
          }
          catch (err) {
            console.log('Error posting data ' + err);
          }
        }