/*
Um módulo Node tem variáveis disponíveis por padrão no escopo de cada módulo, acompanhe a lista abaixo contendo as mais interessantes:

__filename: O nome do arquivo do código que está sendo executado
__dirname: O nome do diretório que está salvo o script que está sendo executado
process: Um objeto que é associado ao presente processo em execução. Além de variáveis, este objeto tem métodos como process.exit, process.cwd e process.uptime
process.argv: Um array contendo os argumentos de linha de comando. O primeiro elemento será node, o segundo elemento será o nome do arquivo JavaScript, e os próximos serão todos os argumentos de linha de comandos adicionais, caso sejam atribuídos
process.stdin, process.stout, process.stderr: Streams que correspondem à entrada padrão, a saída padrão, e a saída de erro padrão do processo atual
process.env: Um objeto contendo as variáveis de ambiente do usuário do processo atual
require.main: Quando um arquivo é executado diretemente pelo Node, require.main é atribuído à este module .
*/

console.log('__filename: ', __filename);
console.log('__dirname: ', __dirname);
console.log('process.argv: ', process.argv);
console.log('process.env: ', process.env);
if(module === require.main) {
  console.log('Este e o modulo principal sendo executado.');
}
console.log('modulo = ' + module);
console.log('require.main = ' + require.main);