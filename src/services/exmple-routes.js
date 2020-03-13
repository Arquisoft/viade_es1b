type Punto = {
    latitude: Float32Array,
    longitude: Float32Array
}

type Ruta = {
    name: String,
    description: String,
    points: Point[],

};


export default class RoutesExample {
    /*
     *  Function to get providers. This is to mimic the future provider registry
     */
    static getIdentityProviders(): Array<Route> {
        return [
            {
                name: 'route1',
                description: 'Valdesoto',
                points: [
                    {
                        latitude: 43.373925, 
                        longitude:-5.659424
                    },
                    {
                        latitude: 43.375522, 
                        longitude: -5.654447
                    }
                ]
            },
            {
                name: 'route2',
                description: 'Gijon',
                points: [
                    {
                        latitude: 43.542184, 
                        longitude:-5.659775
                    },
                    {
                        latitude: 43.541354, 
                        longitude: -5.656565
                    }
                ]
            }
        ];
    }
}