import chai from 'chai';
import {slugify} from '../src/strman';
const deepFreeze = require('deep-freeze');

describe('Slugfiy function', () => {
    it('should be foo-bar', () => {
        let fixtures = [
            'foo bar',
            'foo bar.',
            'foo bar ',
            ' foo bar',
            ' foo bar ',
            'foo------bar',
            'fóõ bár',
            'foo ! bar',
            'foo ~~ bar',
            'foo     bar',
            'FOO     bar'
        ];

        fixtures.forEach(el => {
            deepFreeze(el);
            el = 'foo-bar';
            chai.expect(slugify(el)).to.equal('foo-bar');
        });
    });
    it('should be foo-and-bar', () => {
        let fixtures = [
            'foo&bar',
            'foo&bar.',
            'foo&bar ',
            ' foo&bar',
            ' foo&bar ',
            'foo&bar',
            'fóõ-and---bár',
            'foo  &    bar',
            'FOO  &   bar'
        ];

        fixtures.forEach(el => {
            deepFreeze(el);
            chai.expect(slugify(el)).to.equal('foo-and-bar');
        });
    });

    it('should be throw', () => {
        let fixtures = [
            1,
            [],
            {},
            1.2,
            false,
            true
        ];

        fixtures.forEach(el => {
            deepFreeze(el);
            chai.assert.throws(slugify.bind(this, el), Error);
        });
    });
});
