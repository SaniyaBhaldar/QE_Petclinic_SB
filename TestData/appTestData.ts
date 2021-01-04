export default {
    appTestData: {

        baseURLData:{
            baseURL: "http://petclinicui.e46708b92c054086909b.eastus.aksapp.io/petclinic/",
        },

        newOwnerData: {
            FirstName: "Raj",
            LastName: "Mane",
            Address: "15 street",
            City: "NewYork",
            Telephone: "9870688977",
            expectedData: "Raj Mane 15 street NewYork 9870688977"
        },

        petDetails: {
            PetName: "George",
            PetBirthdate: "2010/01/20",
            PetType: "snake",
        },

        homePageLabels:{
            homeTab: "HOME",
            ownersTab: "OWNERS",
            VetTab: "VETERINARIANS",
            petTypesTab: "PET TYPES",
            specialitiesTab: "SPECIALTIES",
        }




    }
}