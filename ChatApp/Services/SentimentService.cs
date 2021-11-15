using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.ML;
using MLCore.ML.DataModels;

namespace ChatApp.Services
{
    public interface ISentimentService
    {
        float Predict(string input);
    }

    public class SentimentService : ISentimentService
    {
        private readonly PredictionEnginePool<SampleObservation, SamplePrediction> _predictionEnginePool;

        public SentimentService(PredictionEnginePool<SampleObservation, SamplePrediction> predictionEnginePool)
        {
            // Get the ML Model Engine injected, for scoring
            _predictionEnginePool = predictionEnginePool;
        }
        
        public float Predict(string input)
        {
            // Predict sentiment using ML.NET model
            SampleObservation sampleData = new SampleObservation { Col0 = input };
            
            // Predict sentiment
            SamplePrediction prediction = _predictionEnginePool.Predict(sampleData);
            
            float percentage = CalculatePercentage(prediction.Score);


            return percentage;
        }

        public float CalculatePercentage(double value)
        {
            return 100 * (1.0f / (1.0f + (float)Math.Exp(-value)));
        }
    }
}