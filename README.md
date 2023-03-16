# GCC problem matcher

Creates annotations for warnings and errors in gcc builds.

## Inputs

### build-directory

**Optional** Base directory for build. For builds done in a subdirectory, this should match that directory, otherwise the pattern match will not be able to point to the correct file.

## Example usage

Create annotations for builds done in the root directory

```yaml
    - uses: olemorud/gcc-problem-matcher@v1.0
```

Create annotations for builds done in directory `/workspace/build/`

```yaml
    - uses: olemorud/gcc-problem-matcher@master
      with:
        build-directory: /workspace/build/
```
