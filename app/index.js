'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var AngularUnitGenerator = module.exports = function AngularUnitGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ 
      skipInstall: options['skip-install'],
      callback: function () {
        this.spawnCommand('grunt', ['prepare']);
      }.bind(this)
    });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(AngularUnitGenerator, yeoman.generators.Base);

AngularUnitGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [{
    name: 'testName',
    message: 'What shall we call this test?',
  }];

  this.prompt(prompts, function (props) {
    this.testName = props.testName;

    cb();
  }.bind(this));
};

AngularUnitGenerator.prototype.app = function app() {
  this.mkdir('app');
  this.mkdir('app/scripts');
  this.mkdir('app/scripts/lib');
  this.mkdir('spec');
  this.template('_mod.js', 'app/scripts/lib/' + this.testName + '.js');
  this.template('_mod.spec.js', 'spec/' + this.testName + '.spec.js');

  this.copy('_package.json', 'package.json');
  this.copy('_bower.json', 'bower.json');
  this.copy('_Gruntfile.js', 'Gruntfile.js');
  this.copy('_.ruby-version', '.ruby-version');
  this.copy('_.ruby-gemset', '.ruby-gemset');
  this.copy('_Gemfile', 'Gemfile');
  this.copy('_Guardfile', 'Guardfile');
  this.copy('_jasmine.yml', 'spec/javascripts/support/jasmine.yml');
  this.copy('_jasmine_helper.rb', 'spec/javascripts/jasmine_helper.rb');
};

AngularUnitGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
};
