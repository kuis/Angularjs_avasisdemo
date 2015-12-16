app.controller('BidAwardModalCtrl',
    ['$scope', '$state', '$uibModalInstance', function($scope, $state, $uibModalInstance) {
        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };

        $scope.award = function () {
            $uibModalInstance.close();
            $state.go('bids.compare');
        }

        $scope.budgets = [{
            id: _.uniqueId(),
            name: 'General Requirements',
            division: 'DIVISION1',
            labor: 1000000,
            materials: 75000,
            equipment: 11750,
            misc: 2350,
            total: 131600,
            items: '',
            status: '',
            cpsf: 25.31,
            percent_of_project: 8,
            children: [{
                id: _.uniqueId(),
                name: '12345 - Brick',
                labor: 250000,
                materials: 15000,
                equipment: 6150,
                misc: 80350,
                total: 2331600,

                status: '',
                cpsf: 25.31,
                percent_of_project: 8,
                children: [{
                    id: _.uniqueId(),
                    name: 'Exterior Brick',
                    labor: 20000,
                    materials: 22000,
                    equipment: 450,
                    misc: 12350,
                    total: 5987,

                    status: '',
                    cpsf: 13.46,
                    percent_of_project: 8,
                    children: [{
                        id: _.uniqueId(),
                        labor: 123,
                        materials: 456,
                        equipment: 450,
                        misc: 12350,
                        total: 5987,
                        items: 'estimate',
                        status: ''
                    },
                    {
                        id: _.uniqueId(),
                        labor: 123,
                        materials: 456,
                        equipment: 450,
                        misc: 12350,
                        total: 5987,
                        items: 'contract',
                        status: ''
                    },
                    {
                        id: _.uniqueId(),
                        labor: 123,
                        materials: 456,
                        equipment: 450,
                        misc: 12350,
                        total: 5987,
                        items: 'purchase order',
                        status: ''
                    },{
                        id: _.uniqueId(),
                        labor: 123,
                        materials: 456,
                        equipment: 450,
                        misc: 12350,
                        total: 5987,
                        items: 'change order',
                        status: ''
                    }]
                },
                {
                    id: _.uniqueId(),
                    name: 'Interior Brick',
                    labor: 20000,
                    materials: 22000,
                    equipment: 450,
                    misc: 12350,
                    total: 5987,

                    status: '',
                    cpsf: 13.46,
                    percent_of_project: 8,
                    children: [{
                        id: _.uniqueId(),
                        labor: 123,
                        materials: 456,
                        equipment: 450,
                        misc: 12350,
                        total: 5987,
                        items: 'estimate',
                        status: ''
                    },
                    {
                        id: _.uniqueId(),
                        labor: 123,
                        materials: 456,
                        equipment: 450,
                        misc: 12350,
                        total: 5987,
                        items: 'contract',
                        status: ''
                    },
                    {
                        id: _.uniqueId(),
                        labor: 123,
                        materials: 456,
                        equipment: 450,
                        misc: 12350,
                        total: 5987,
                        items: 'purchase order',
                        status: ''
                    },{
                        id: _.uniqueId(),
                        labor: 123,
                        materials: 456,
                        equipment: 450,
                        misc: 12350,
                        total: 5987,
                        items: 'change order',
                        status: ''
                    }]
                }]
            },
            {
                id: _.uniqueId(),
                name: '12345 - Brick',
                labor: 250000,
                materials: 15000,
                equipment: 6150,
                misc: 80350,
                total: 2331600,
                status: '',
                cpsf: 25.31,
                percent_of_project: 8,
                children: [{
                    id: _.uniqueId(),
                    name: 'Exterior Brick',
                    labor: 20000,
                    materials: 22000,
                    equipment: 450,
                    misc: 12350,
                    total: 5987,
                    status: '',
                    cpsf: 13.46,
                    percent_of_project: 8
                },
                {
                    id: _.uniqueId(),
                    name: 'Interior Brick',
                    labor: 50000,
                    materials: 7000,
                    equipment: 129,
                    misc: 12350,
                    total: 987654,
                    status: '',
                    cpsf: 13.46,
                    percent_of_project: 8
                }]
            }]
        },
        {
            id: _.uniqueId(),
            name: 'Site Construction',
            division: 'DIVISION2',
            labor: 1000000,
            materials: 75000,
            equipment: 11750,
            misc: 2350,
            total: 131600,
            items: '',
            status: '',
            cpsf: 25.31,
            percent_of_project: 8,
            children: [{
                id: _.uniqueId(),
                name: '12345 - Brick',
                labor: 250000,
                materials: 15000,
                equipment: 6150,
                misc: 80350,
                total: 2331600,
                status: '',
                cpsf: 25.31,
                percent_of_project: 8,
                children: [{
                    id: _.uniqueId(),
                    name: 'Exterior Brick',
                    labor: 20000,
                    materials: 22000,
                    equipment: 450,
                    misc: 12350,
                    total: 5987,
                    status: '',
                    cpsf: 13.46,
                    percent_of_project: 8
                },
                {
                    id: _.uniqueId(),
                    name: 'Interior Brick',
                    labor: 50000,
                    materials: 7000,
                    equipment: 129,
                    misc: 12350,
                    total: 987654,
                    status: '',
                    cpsf: 13.46,
                    percent_of_project: 8
                }]
            },
            {
                id: _.uniqueId(),
                name: '12345 - Brick',
                labor: 250000,
                materials: 15000,
                equipment: 6150,
                misc: 80350,
                total: 2331600,
                status: '',
                cpsf: 25.31,
                percent_of_project: 8,
                children: [{
                    id: _.uniqueId(),
                    name: 'Exterior Brick',
                    labor: 20000,
                    materials: 22000,
                    equipment: 450,
                    misc: 12350,
                    total: 5987,
                    status: '',
                    cpsf: 13.46,
                    percent_of_project: 8
                },
                {
                    id: _.uniqueId(),
                    name: 'Interior Brick',
                    labor: 50000,
                    materials: 7000,
                    equipment: 129,
                    misc: 12350,
                    total: 987654,
                    status: '',
                    cpsf: 13.46,
                    percent_of_project: 8
                }]
            }]
        },
        {
            id: _.uniqueId(),
            name: 'Concrete',
            division: 'DIVISION3',
            labor: 1000000,
            materials: 75000,
            equipment: 11750,
            misc: 2350,
            total: 131600,
            items: '',
            status: '',
            cpsf: 25.31,
            percent_of_project: 8,
            children: [{
                id: _.uniqueId(),
                name: '12345 - Brick',
                labor: 250000,
                materials: 15000,
                equipment: 6150,
                misc: 80350,
                total: 2331600,
                status: '',
                cpsf: 25.31,
                percent_of_project: 8,
                children: [{
                    id: _.uniqueId(),
                    name: 'Exterior Brick',
                    labor: 20000,
                    materials: 22000,
                    equipment: 450,
                    misc: 12350,
                    total: 5987,
                    status: '',
                    cpsf: 13.46,
                    percent_of_project: 8
                },
                {
                    id: _.uniqueId(),
                    name: 'Interior Brick',
                    labor: 50000,
                    materials: 7000,
                    equipment: 129,
                    misc: 12350,
                    total: 987654,
                    status: '',
                    cpsf: 13.46,
                    percent_of_project: 8
                }]
            },
            {
                id: _.uniqueId(),
                name: '12345 - Brick',
                labor: 250000,
                materials: 15000,
                equipment: 6150,
                misc: 80350,
                total: 2331600,
                status: '',
                cpsf: 25.31,
                percent_of_project: 8,
                children: [{
                    id: _.uniqueId(),
                    name: 'Exterior Brick',
                    labor: 20000,
                    materials: 22000,
                    equipment: 450,
                    misc: 12350,
                    total: 5987,
                    status: '',
                    cpsf: 13.46,
                    percent_of_project: 8
                },
                {
                    id: _.uniqueId(),
                    name: 'Interior Brick',
                    labor: 50000,
                    materials: 7000,
                    equipment: 129,
                    misc: 12350,
                    total: 987654,
                    status: '',
                    cpsf: 13.46,
                    percent_of_project: 8
                }]
            }]
        }];
}]);