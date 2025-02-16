Feature: Validate_flipkart


@TED-32932 @Windows @fe
Scenario: navigate to home page
Given Navigate to the Website
And Navigate To Home Page Category 'Electronics'
When Click to the Category Sub Menu 'Gaming'
When Apply the Brand Filter as 'HP'

