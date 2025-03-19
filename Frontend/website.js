// The API Gateway endpoint URL you will get after deploying
const apiUrl = 'https://your-api-id.execute-api.region.amazonaws.com/your-endpoint';

// Function to set up the upload area
document.addEventListener('DOMContentLoaded', function() {
    const uploadArea = document.getElementById('uploadArea');
    const imageInput = document.getElementById('imageInput');
    const fileName = document.getElementById('fileName');
    
    // Trigger file input when clicking on the upload area
    uploadArea.addEventListener('click', function() {
        imageInput.click();
    });
    
    // Handle drag and drop
    uploadArea.addEventListener('dragover', function(e) {
        e.preventDefault();
        uploadArea.style.backgroundColor = '#eaf2ff';
    });
    
    uploadArea.addEventListener('dragleave', function() {
        uploadArea.style.backgroundColor = '#f5f9ff';
    });
    
    uploadArea.addEventListener('drop', function(e) {
        e.preventDefault();
        uploadArea.style.backgroundColor = '#f5f9ff';
        
        if (e.dataTransfer.files.length > 0) {
            imageInput.files = e.dataTransfer.files;
            updateFileName(e.dataTransfer.files[0].name);
        }
    });
    
    // Update the file name when a file is selected
    imageInput.addEventListener('change', function() {
        if (this.files.length > 0) {
            updateFileName(this.files[0].name);
        }
    });
    
    function updateFileName(name) {
        fileName.textContent = name;
    }
});

// Function to handle image upload and call the API
function uploadImage() {
    const input = document.getElementById('imageInput');
    const file = input.files[0];
    const resultContainer = document.getElementById('resultContainer');
    const result = document.getElementById('result');
    
    if (!file) {
        alert("Please select an image file.");
        return;
    }
    
    // Show loading animation
    result.innerHTML = '<div style="text-align: center;"><i class="fas fa-spinner fa-spin"></i> Analyzing your image...</div>';
    resultContainer.style.display = 'block';
    
    const formData = new FormData();
    formData.append('image', file);
    
    fetch(apiUrl, {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        // Display the result from your model in a Spotify-like format
        let resultHTML = '';
        
        if (typeof data.prediction === 'string') {
            resultHTML = `
                <div class="result-item">
                    <span class="prediction-name">${data.prediction}</span>
                    <span class="prediction-confidence">100%</span>
                </div>`;
        } else if (Array.isArray(data.prediction)) {
            // If prediction is an array of results with confidence scores
            resultHTML = data.prediction.map(pred => `
                <div class="result-item">
                    <span class="prediction-name">${pred.label}</span>
                    <span class="prediction-confidence">${Math.round(pred.confidence * 100)}%</span>
                </div>`
            ).join('');
        } else {
            resultHTML = `
                <div class="result-item">
                    <span class="prediction-name">Result</span>
                    <span class="prediction-confidence">${data.prediction}</span>
                </div>`;
        }
        
        result.innerHTML = resultHTML;
    })
    .catch(error => {
        console.error("Error:", error);
        result.innerHTML = '<div style="color: #e74c3c;"><i class="fas fa-exclamation-circle"></i> Error analyzing image. Please try again.</div>';
    });
}
