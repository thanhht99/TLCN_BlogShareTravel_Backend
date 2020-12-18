'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        let data = [{
                infoHotel: 'Bạc Liêu',
                infoVehicle: 'Đi về bằng xe',
                startDate: '21/11/2020',
                endDate: '25/11/2020',
                price: '3.879.000',
                childrenPrice: '1.940.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 40,
                isStatus: true,
                tourId: 1,
                tourGuideId: 1
            },
            {
                infoHotel: 'Vinpearl Tây Ninh',
                infoVehicle: 'Đi về bằng xe',
                startDate: '28/11/2020',
                endDate: '30/11/2020',
                price: '1.879.000',
                childrenPrice: '940.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 40,
                isStatus: true,
                tourId: 8,
                tourGuideId: 1
            },
            {
                infoHotel: 'Vinpearl Tây Ninh',
                infoVehicle: 'Đi về bằng xe',
                startDate: '20/12/2020',
                endDate: '22/12/2020',
                price: '1.879.000',
                childrenPrice: '940.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 40,
                isStatus: true,
                tourId: 8,
                tourGuideId: 1
            },
            //1
            {
                infoHotel: 'Resort Hàm Tiến - Mũi Né',
                infoVehicle: 'Đi về bằng xe',
                startDate: '21/12/2020',
                endDate: '24/12/2020',
                price: '2.379.000',
                childrenPrice: '1.190.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 40,
                isStatus: true,
                tourId: 3,
                tourGuideId: 1
            },
            //2
            {
                infoHotel: 'resort Hàm Tiến - Mũi Né',
                infoVehicle: 'Đi về bằng xe',
                startDate: '25/12/2020',
                endDate: '28/12/2020',
                price: '2.379.000',
                childrenPrice: '1.190.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 40,
                isStatus: true,
                tourId: 3,
                tourGuideId: 1
            },
            //3
            {
                infoHotel: 'resort Hàm Tiến - Mũi Né',
                infoVehicle: 'Đi về bằng xe',
                startDate: '30/12/2020',
                endDate: '2/1/2021',
                price: '2.379.000',
                childrenPrice: '1.190.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 40,
                isStatus: true,
                tourId: 3,
                tourGuideId: 1
            },
            //4
            {
                infoHotel: 'resort Hàm Tiến - Mũi Né',
                infoVehicle: 'Đi về bằng xe',
                startDate: '4/1/2021',
                endDate: '7/1/2021',
                price: '2.379.000',
                childrenPrice: '1.190.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 40,
                isStatus: true,
                tourId: 3,
                tourGuideId: 1
            },
            //5
            {
                infoHotel: 'resort Hàm Tiến - Mũi Né',
                infoVehicle: 'Đi về bằng xe',
                startDate: '10/1/2021',
                endDate: '13/1/2021',
                price: '2.379.000',
                childrenPrice: '1.190.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 40,
                isStatus: true,
                tourId: 3,
                tourGuideId: 1
            },
            //6
            {
                infoHotel: 'resort Hàm Tiến - Mũi Né',
                infoVehicle: 'Đi về bằng xe',
                startDate: '15/1/2021',
                endDate: '18/1/2021',
                price: '2.379.000',
                childrenPrice: '1.190.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 40,
                isStatus: true,
                tourId: 3,
                tourGuideId: 1
            },
            //7
            {
                infoHotel: 'resort Hàm Tiến - Mũi Né',
                infoVehicle: 'Đi về bằng xe',
                startDate: '20/1/2021',
                endDate: '23/1/2021',
                price: '2.379.000',
                childrenPrice: '1.190.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 40,
                isStatus: true,
                tourId: 3,
                tourGuideId: 1
            },
            //8
            {
                infoHotel: 'resort Hàm Tiến - Mũi Né',
                infoVehicle: 'Đi về bằng xe',
                startDate: '25/1/2021',
                endDate: '28/1/2021',
                price: '2.379.000',
                childrenPrice: '1.190.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 40,
                isStatus: true,
                tourId: 3,
                tourGuideId: 1
            },
            //9
            {
                infoHotel: 'resort Hàm Tiến - Mũi Né',
                infoVehicle: 'Đi về bằng xe',
                startDate: '30/1/2021',
                endDate: '2/2/2021',
                price: '2.379.000',
                childrenPrice: '1.190.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 40,
                isStatus: true,
                tourId: 3,
                tourGuideId: 1
            },
            //10
            {
                infoHotel: 'resort Hàm Tiến - Mũi Né',
                infoVehicle: 'Đi về bằng xe',
                startDate: '5/2/2021',
                endDate: '8/2/2021',
                price: '2.379.000',
                childrenPrice: '1.190.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 40,
                isStatus: true,
                tourId: 3,
                tourGuideId: 1
            },
            //11
            {
                infoHotel: 'resort Hàm Tiến - Mũi Né',
                infoVehicle: 'Đi về bằng xe',
                startDate: '10/2/2021',
                endDate: '13/2/2021',
                price: '2.379.000',
                childrenPrice: '1.190.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 40,
                isStatus: true,
                tourId: 3,
                tourGuideId: 1
            },
            //12
            {
                infoHotel: 'resort Hàm Tiến - Mũi Né',
                infoVehicle: 'Đi về bằng xe',
                startDate: '15/2/2021',
                endDate: '18/2/2021',
                price: '2.379.000',
                childrenPrice: '1.190.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 40,
                isStatus: true,
                tourId: 3,
                tourGuideId: 1
            },
            //13
            {
                infoHotel: 'resort Hàm Tiến - Mũi Né',
                infoVehicle: 'Đi về bằng xe',
                startDate: '20/2/2021',
                endDate: '23/2/2020',
                price: '2.379.000',
                childrenPrice: '1.190.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 40,
                isStatus: true,
                tourId: 3,
                tourGuideId: 1
            },
            //14
            {
                infoHotel: 'resort Hàm Tiến - Mũi Né',
                infoVehicle: 'Đi về bằng xe',
                startDate: '25/2/2021',
                endDate: '28/2/2021',
                price: '2.379.000',
                childrenPrice: '1.190.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 40,
                isStatus: true,
                tourId: 3,
                tourGuideId: 1
            },
            //15
            {
                infoHotel: 'resort Hàm Tiến - Mũi Né',
                infoVehicle: 'Đi về bằng xe',
                startDate: '1/3/2021',
                endDate: '4/3/2021',
                price: '2.379.000',
                childrenPrice: '1.190.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 40,
                isStatus: true,
                tourId: 3,
                tourGuideId: 1
            },
            //16
            {
                infoHotel: 'resort Hàm Tiến - Mũi Né',
                infoVehicle: 'Đi về bằng xe',
                startDate: '5/3/2021',
                endDate: '8/3/2021',
                price: '2.379.000',
                childrenPrice: '1.190.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 40,
                isStatus: true,
                tourId: 3,
                tourGuideId: 1
            },
            //17
            {
                infoHotel: 'resort Hàm Tiến - Mũi Né',
                infoVehicle: 'Đi về bằng xe',
                startDate: '10/3/2021',
                endDate: '13/3/2021',
                price: '2.379.000',
                childrenPrice: '1.190.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 40,
                isStatus: true,
                tourId: 3,
                tourGuideId: 1
            },
            //18
            {
                infoHotel: 'resort Hàm Tiến - Mũi Né',
                infoVehicle: 'Đi về bằng xe',
                startDate: '15/3/2021',
                endDate: '18/3/2021',
                price: '2.379.000',
                childrenPrice: '1.190.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 40,
                isStatus: true,
                tourId: 3,
                tourGuideId: 1
            },
            //19
            {
                infoHotel: 'resort Hàm Tiến - Mũi Né',
                infoVehicle: 'Đi về bằng xe',
                startDate: '20/3/2021',
                endDate: '23/3/2021',
                price: '2.379.000',
                childrenPrice: '1.190.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 40,
                isStatus: true,
                tourId: 3,
                tourGuideId: 1
            },
            //20
            {
                infoHotel: 'resort Hàm Tiến - Mũi Né',
                infoVehicle: 'Đi về bằng xe',
                startDate: '25/3/2021',
                endDate: '28/3/2021',
                price: '2.379.000',
                childrenPrice: '1.190.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 40,
                isStatus: true,
                tourId: 3,
                tourGuideId: 1
            },
            //1
            {
                infoHotel: 'khách sạn 3 sao ĐÀ LẠT',
                infoVehicle: 'Đi về bằng xe',
                startDate: '20/12/2020',
                endDate: '24/12/2020',
                price: '3.079.000',
                childrenPrice: '1.540.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 40,
                isStatus: true,
                tourId: 4,
                tourGuideId: 1
            },
            //2
            {
                infoHotel: 'khách sạn 3 sao ĐÀ LẠT',
                infoVehicle: 'Đi về bằng xe',
                startDate: '25/12/2020',
                endDate: '29/12/2020',
                price: '3.079.000',
                childrenPrice: '1.540.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 40,
                isStatus: true,
                tourId: 4,
                tourGuideId: 1
            },
            //3
            {
                infoHotel: 'khách sạn 3 sao ĐÀ LẠT',
                infoVehicle: 'Đi về bằng xe',
                startDate: '30/12/2020',
                endDate: '3/1/2021',
                price: '3.079.000',
                childrenPrice: '1.540.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 40,
                isStatus: true,
                tourId: 4,
                tourGuideId: 1
            },
            //4
            {
                infoHotel: 'khách sạn 3 sao ĐÀ LẠT',
                infoVehicle: 'Đi về bằng xe',
                startDate: '5/1/2021',
                endDate: '09/1/2021',
                price: '3.079.000',
                childrenPrice: '1.540.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 40,
                isStatus: true,
                tourId: 4,
                tourGuideId: 1
            },
            //5
            {
                infoHotel: 'khách sạn 3 sao ĐÀ LẠT',
                infoVehicle: 'Đi về bằng xe',
                startDate: '10/1/2021',
                endDate: '14/1/2021',
                price: '3.079.000',
                childrenPrice: '1.540.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 40,
                isStatus: true,
                tourId: 4,
                tourGuideId: 1
            },
            //6
            {
                infoHotel: 'khách sạn 3 sao ĐÀ LẠT',
                infoVehicle: 'Đi về bằng xe',
                startDate: '15/1/2021',
                endDate: '19/1/2021',
                price: '3.079.000',
                childrenPrice: '1.540.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 40,
                isStatus: true,
                tourId: 4,
                tourGuideId: 1
            },
            //7
            {
                infoHotel: 'khách sạn 3 sao ĐÀ LẠT',
                infoVehicle: 'Đi về bằng xe',
                startDate: '20/1/2021',
                endDate: '24/1/2021',
                price: '3.079.000',
                childrenPrice: '1.540.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 40,
                isStatus: true,
                tourId: 4,
                tourGuideId: 1
            },
            //8
            {
                infoHotel: 'khách sạn 3 sao ĐÀ LẠT',
                infoVehicle: 'Đi về bằng xe',
                startDate: '25/1/2021',
                endDate: '29/1/2021',
                price: '3.079.000',
                childrenPrice: '1.540.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 40,
                isStatus: true,
                tourId: 4,
                tourGuideId: 1
            },
            //9
            {
                infoHotel: 'khách sạn 3 sao ĐÀ LẠT',
                infoVehicle: 'Đi về bằng xe',
                startDate: '30/1/2021',
                endDate: '4/2/2021',
                price: '3.079.000',
                childrenPrice: '1.540.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 40,
                isStatus: true,
                tourId: 4,
                tourGuideId: 1
            },
            //10
            {
                infoHotel: 'khách sạn 3 sao ĐÀ LẠT',
                infoVehicle: 'Đi về bằng xe',
                startDate: '5/2/2021',
                endDate: '9/2/2021',
                price: '3.079.000',
                childrenPrice: '1.540.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 40,
                isStatus: true,
                tourId: 4,
                tourGuideId: 1
            },
            //11
            {
                infoHotel: 'khách sạn 3 sao ĐÀ LẠT',
                infoVehicle: 'Đi về bằng xe',
                startDate: '10/2/2021',
                endDate: '14/2/2021',
                price: '3.079.0000',
                childrenPrice: '1.540.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 40,
                isStatus: true,
                tourId: 4,
                tourGuideId: 1
            },
            //12
            {
                infoHotel: 'khách sạn 3 sao ĐÀ LẠT',
                infoVehicle: 'Đi về bằng xe',
                startDate: '15/2/2021',
                endDate: '19/2/2021',
                price: '3.079.000',
                childrenPrice: '1.540.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 40,
                isStatus: true,
                tourId: 4,
                tourGuideId: 1
            },
            //13
            {
                infoHotel: 'khách sạn 3 sao ĐÀ LẠT',
                infoVehicle: 'Đi về bằng xe',
                startDate: '20/2/2021',
                endDate: '24/2/2021',
                price: '3.079.000',
                childrenPrice: '1.540.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 40,
                isStatus: true,
                tourId: 4,
                tourGuideId: 1
            },
            //14
            {
                infoHotel: 'khách sạn 3 sao ĐÀ LẠT',
                infoVehicle: 'Đi về bằng xe',
                startDate: '25/2/2021',
                endDate: '1/3/2021',
                price: '3.079.000',
                childrenPrice: '1.540.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 40,
                isStatus: true,
                tourId: 4,
                tourGuideId: 1
            },
            //15
            {
                infoHotel: 'khách sạn 3 sao ĐÀ LẠT',
                infoVehicle: 'Đi về bằng xe',
                startDate: '2/3/2021',
                endDate: '6/3/2021',
                price: '3.079.000',
                childrenPrice: '1.540.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 40,
                isStatus: true,
                tourId: 4,
                tourGuideId: 1
            },
            //16
            {
                infoHotel: 'khách sạn 3 sao ĐÀ LẠT',
                infoVehicle: 'Đi về bằng xe',
                startDate: '8/3/2021',
                endDate: '12/3/2021',
                price: '3.079.000',
                childrenPrice: '1.540.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 40,
                isStatus: true,
                tourId: 4,
                tourGuideId: 1
            },
            //17
            {
                infoHotel: 'khách sạn 3 sao ĐÀ LẠT',
                infoVehicle: 'Đi về bằng xe',
                startDate: '15/3/2021',
                endDate: '19/3/2021',
                price: '3.079.000',
                childrenPrice: '1.540.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 40,
                isStatus: true,
                tourId: 4,
                tourGuideId: 1
            },
            //18
            {
                infoHotel: 'khách sạn 3 sao ĐÀ LẠT',
                infoVehicle: 'Đi về bằng xe',
                startDate: '20/3/2021',
                endDate: '24/3/2021',
                price: '3.079.000',
                childrenPrice: '1.540.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 40,
                isStatus: true,
                tourId: 4,
                tourGuideId: 1
            },
            //19
            {
                infoHotel: 'khách sạn 3 sao ĐÀ LẠT',
                infoVehicle: 'Đi về bằng xe',
                startDate: '25/3/2021',
                endDate: '29/3/2021',
                price: '3.079.000',
                childrenPrice: '1.540.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 40,
                isStatus: true,
                tourId: 4,
                tourGuideId: 1
            },
            //20
            {
                infoHotel: 'khách sạn 3 sao ĐÀ LẠT',
                infoVehicle: 'Đi về bằng xe',
                startDate: '30/3/2021',
                endDate: '4/4/2021',
                price: '3.079.000',
                childrenPrice: '1.540.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 40,
                isStatus: true,
                tourId: 4,
                tourGuideId: 1
            },
        ];
        data.map(item => {
            item.createdAt = Sequelize.literal('NOW()');
            item.updatedAt = Sequelize.literal('NOW()');
            return item;
        });
        return queryInterface.bulkInsert('Trips', data, {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Trips', null, {});
    }
};