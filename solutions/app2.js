const HU = {
    date(inputDate) {
        return new Intl.DateTimeFormat('hu-HU').format(inputDate);
    },
    curreny(amount) {
        return new Intl.NumberFormat('hu-HU', {
            style: 'currency',
            currency: 'HUF'
        }).format(amount);
    },
    list(arr) {
        for (let i = 0; i < arr.length - 2; i++) {
            arr[i] = `${arr[i]},`;
        };
        arr[arr.length - 2] = `${arr[arr.length - 2]} és`;
        return arr.join(' ');
    }
}


export default HU;