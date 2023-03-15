# GCC problem matcher

Unstable release!

Creates annotations for warnings and errors in gcc builds.

## Inputs

### build-directory

**Optional** Base directory for build. For builds done in a subdirectory, this should match that directory, otherwise the pattern match will not be able to point to the correct file.

## Example usage

Just add this line anywhere before running the build step.

```yaml
    - uses: olemorud/gcc-problem-matcher@master
      with:
        build-directory: /workspace/build/
```
