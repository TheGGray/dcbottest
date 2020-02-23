const Discord = require("discord.js");

module.exports = {
    komut: "rol-oluştur",
    açıklama: "Rol oluşturmak için kullanılır.",
    kategori: "mod",
    alternatifler: ['rol-oluştur'],
    kullanım: ".rol-oluştur",
    yetki: 4,
    args: [
{
    anathar:"olusturulacakrol",
    soru:"Oluşturacağınız rolün ismini belirleyin.",
    tip:"yazi"
}
    ]
};

module.exports.baslat = (client, message, args) => {

if(message.author.bot === true) {
    return;
}

if(!message.guild) {
    return;
}
    
    var olusacakrol = args.olusturulacakrol;

    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES"))
     return message.channel.send("Rol oluşturmak için gereken yetkiye sahip değilim.")
    
    message.guild.createRole({
    name: olusacakrol,
    color: "RED"
})

message.channel.send(` ${olusacakrol} adlı rol oluşturuldu. `)
}