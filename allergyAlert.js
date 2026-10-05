// Checks a patient's recorded allergies for penicillin (case-insensitive, ignoring
// surrounding whitespace, exact match on the whole entry; missing allergies are
// treated as none) and returns an alert message if found, otherwise a
// "no known allergy" message. Only penicillin is checked; other allergies are ignored.
function showAllergyAlert(patient) {
    const allergies = patient.allergies || [];
    if(allergies.some(allergy => allergy.trim().toLowerCase() === "penicillin")) {
        return "ALERT: Patient is allergic to Penicillin";
    }
    return "No known allergy identified";
}