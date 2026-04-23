import { members } from "./src/data/members";

const requiredFields = ["id", "name", "role", "bio", "fullBio", "avatar", "isOnline", "skills"];

members.forEach((member, index) => {
  requiredFields.forEach(field => {
    if (!member[field]) {
      console.error(`Member at index ${index} (${member.name || "Unknown"}) is missing field: ${field}`);
    }
  });
});

console.log("Validation complete.");
