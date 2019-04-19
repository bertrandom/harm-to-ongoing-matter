const fs = require('fs');

const config = require('config');
const Twit = require('twit');

var T = new Twit({
    consumer_key: config.twitter.client_id,
    consumer_secret: config.twitter.client_secret,
    access_token: config.twitter.access_token,
    access_token_secret: config.twitter.access_token_secret,
});

var postReply = function(index) {

    var image = fs.readFileSync(__dirname + '/data/report-' + (index + '').padStart(3, '0') + '.png', { encoding: 'base64' })

    T.post('media/upload', { media_data: image }, function (err, data, response) {

        if (err) {
            console.log(err);
            return;
        }

        var mediaIdStr = data.media_id_string;

        var params = { status: 'harm to ongoing matter', in_reply_to_status_id: '1119119964797976576', media_ids: [mediaIdStr] }

        T.post('statuses/update', params, function (err, data, response) {

            if (err) {
                console.log(err);
                return;
            }

            console.log(index + ': ' + data.id_str);

        });

    });

};

if (process.argv[2]) {
    postReply(process.argv[2]);
}