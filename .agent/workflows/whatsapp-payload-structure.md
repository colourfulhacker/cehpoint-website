---
description: How to maintain the WhatsApp Training Application Payload
---

# WhatsApp Training Application Payload

The training application form (`pages/training.tsx`) generates a pre-filled WhatsApp message. This message contains two parts:

1.  **Human Readable Section**: Summary of the applicant and the course.
2.  **Digital Payload Section**: A Base64 encoded JSON object for automated processing.

## Payload Structure

The `DIGITAL_PAYLOAD` contains a Base64 string which decodes to the following JSON structure:

```json
{
  "source": "cehpoint_website_training",
  "timestamp": "ISO_DATE_STRING",
  "type": "premium" | "entrepreneur" | "student",
  "training": "Training Title String",
  "price": "Price String",
  "user_data": {
    "name": "...",
    "phone": "...",
    "email": "...",
    "companyName": "...",
    "industry": "...",
    "collegeName": "...",
    "yearOfStudy": "...",
    "areaOfInterest": "..."
  },
  "curriculum_context": [
    "Module 1",
    "Module 2",
    "..."
  ]
}
```

## Maintenance

- To update the **Curriculum** sent in the payload: Update the `premiumTrainings` array in `pages/training.tsx`.
- To update the **User Data**: Ensure any new form fields added to `formData` are also included in the `user_data` field of the payload object before encoding.
