using System;
using Microsoft.Extensions.ML;
using Microsoft.AspNetCore.Mvc;
using MLCore.ML.DataModels;

namespace ChatApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SentimentController : ControllerBase
    {
        private readonly PredictionEnginePool<SampleObservation, SamplePrediction> _predictionEnginePool;

        public SentimentController(PredictionEnginePool<SampleObservation, SamplePrediction> predictionEnginePool)
        {
            // Get the ML Model Engine injected, for scoring
            _predictionEnginePool = predictionEnginePool;
        }


        [HttpGet("remove_chat")]
        public IActionResult PredictSentiment(string sentimentText)
        {
            // Predict sentiment using ML.NET model
            SampleObservation sampleData = new SampleObservation { Col0 = sentimentText };
            
            // Predict sentiment
            SamplePrediction prediction = _predictionEnginePool.Predict(sampleData);
            
            float percentage = 100 * (1.0f / (1.0f + (float)Math.Exp(-prediction.Score))); //CalculatePercentage(prediction.Score);

            return Ok(percentage);
        }

        // public float CalculatePercentage(double value)
        // {
        //     return 100 * (1.0f / (1.0f + (float)Math.Exp(-value)));
        // }
    }
}