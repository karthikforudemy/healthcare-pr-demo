// Checks a patient's recorded allergies for penicillin (case-insensitive, exact
// match on the whole entry) and returns an alert message if found, otherwise a
// "no known allergy" message. Only penicillin is checked; other allergies are ignored.
function showAllergyAlert(patient) {
    if(patient.allergies.some(allergy => allergy.toLowerCase() === "penicillin")) {
        return "ALERT: Patient is allergic to Penicillin";
    }
    return "No known allergy identified";
}