import moment from 'moment'
import React from 'react'

const RelativeTime = (date) => {

    const dateAgo = moment(date, moment.ISO_8601);
    const formattedDate = dateAgo.fromNow();

    return formattedDate;

}

export default RelativeTime